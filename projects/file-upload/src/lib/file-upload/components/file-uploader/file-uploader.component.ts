import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'lib-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  constructor(private readonly domSanitizer: DomSanitizer) {}

  files: { size: string; name: string; src: SafeResourceUrl }[] = [];

  ngOnInit(): void {}

  filesChange = (files: FileList) => {
    this.files = [];
    Array.from(files).forEach((file) => {
      this.files.push({
        size: this.getFileSizeDescription(file.size),
        name: file.name,
        src: this.domSanitizer.bypassSecurityTrustResourceUrl(this.createImageUrl(file)),
      });
    });
  };

  createImageUrl = (file: File): string => URL.createObjectURL(file);

  getFileSizeDescription = (fileSize: number): string => {
    if (fileSize < 1024) {
      return fileSize + 'bytes';
    } else if (fileSize > 1024 && fileSize < 1048576) {
      return (fileSize / 1024).toFixed(1) + 'KB';
    } else if (fileSize > 1048576) {
      return (fileSize / 1048576).toFixed(1) + 'MB';
    }
  };
}
