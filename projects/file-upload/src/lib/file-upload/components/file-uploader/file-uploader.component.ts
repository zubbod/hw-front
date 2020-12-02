import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { throwError } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

export interface IUploadFile {
  size: string;
  name: string;
  src: SafeResourceUrl;
  data: Blob;
  progress?: number;
  isUploaded?: boolean;
  filePath?: string;
  fileName?: string;
}

export class SaveFileResponseDto {
  success = false;
  filePath = '';
  fileName = '';
}

export class DeleteFileResponseDto {
  success = false;
  fileName = '';
  message = '';
}

@Component({
  selector: 'lib-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  constructor(private readonly domSanitizer: DomSanitizer, private readonly http: HttpClient) {}

  files: IUploadFile[] = [];
  isUploading = false;
  isAllLoaded = false;
  private fileList: FileList;
  private readonly uploadUri = 'http://localhost:3000/api/file/upload';
  private readonly deleteUri = 'http://localhost:3000/api/file/delete';

  @Input() acceptedFiles: string[] = ['.jpeg', '.jpg', '.png', '.webp'];
  @Input() isMultiple = false;

  @Output() fileUpload = new EventEmitter<string>();

  ngOnInit(): void {}

  filesChange = (files: FileList) => {
    this.files = [];
    this.fileList = files;
    Array.from(files).forEach((file) => {
      this.files.push({
        size: this.getFileSizeDescription(file.size),
        name: file.name,
        src: this.domSanitizer.bypassSecurityTrustResourceUrl(this.createImageUrl(file)),
        data: file,
      });
    });
  };

  private createImageUrl = (file: File): string => URL.createObjectURL(file);

  private getFileSizeDescription = (fileSize: number): string => {
    if (fileSize < 1024) {
      return fileSize + 'bytes';
    } else if (fileSize > 1024 && fileSize < 1048576) {
      return (fileSize / 1024).toFixed(1) + 'KB';
    } else if (fileSize > 1048576) {
      return (fileSize / 1048576).toFixed(1) + 'MB';
    }
  };

  private checkIsAllLoaded = (): boolean =>
    !!this.files.length && this.files.every((el) => el.isUploaded);

  upload = (file: IUploadFile) => {
    this.isUploading = true;
    const formData = new FormData();
    formData.append('image', file.data, file.name);
    return this.http
      .post<SaveFileResponseDto>(this.uploadUri, formData, {
        observe: 'events',
        reportProgress: true,
        responseType: 'json',
      })
      .pipe(
        map((event) => {
          switch (event.type) {
            case HttpEventType.UploadProgress:
              file.progress = Math.round((event.loaded * 100) / event.total);
              break;
            case HttpEventType.Response:
              this.isUploading = false;
              file.isUploaded = true;
              return event;
          }
        }),
        catchError((error) => {
          this.isUploading = false;
          return throwError(error);
        }),
        filter((res) => !isNullOrUndefined(res)),
      )
      .subscribe((res) => {
        const { filePath, fileName } = res.body;
        file.fileName = fileName;
        this.isAllLoaded = this.checkIsAllLoaded();
        this.fileUpload.emit(filePath);
      });
  };

  delete = (file: IUploadFile): Promise<any> => {
    const { fileName, name } = file;
    return this.http
      .post<DeleteFileResponseDto>(this.deleteUri, { fileName, name })
      .pipe(
        map((res) => {
          const { success, fileName } = res;
          if (success) {
            this.files = this.files.filter((file) => file.fileName !== fileName);
            this.isAllLoaded = this.checkIsAllLoaded();
          }
        }),
      )
      .toPromise();
  };
}
