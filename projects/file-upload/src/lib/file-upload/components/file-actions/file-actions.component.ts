import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IUploadFile } from '../../interfaces/upload-file.interface';

@Component({
  selector: 'lib-file-actions',
  templateUrl: './file-actions.component.html',
  styleUrls: ['./file-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileActionsComponent implements OnInit {
  @Input() set drawingImgFile(value: IUploadFile) {
    this.file = value;
    if (this.file) this.drawImage(this.file);
  }

  get drawingImgFile(): IUploadFile {
    return this.file;
  }

  @ViewChild('canvas', { read: ElementRef, static: true }) public canvas: ElementRef;

  private canvasElement: HTMLCanvasElement;
  private imageElement: HTMLImageElement = new Image();
  private file: IUploadFile;

  constructor() {}

  ngOnInit(): void {}

  private readonly drawImage = async (file: IUploadFile) => {
    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    this.imageElement.src = file.src['changingThisBreaksApplicationSecurity'];
    const context = canvas.getContext('2d');

    await new Promise((resolve) => {
      this.imageElement.onload = resolve;
    });
    canvas.width = this.imageElement.width;
    canvas.height = this.imageElement.height;
    context.drawImage(
      this.imageElement,
      0,
      0,
      this.imageElement.width,
      this.imageElement.height,
      120,
      120,
      320,
      240,
    );
  };
}
