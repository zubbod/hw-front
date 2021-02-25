import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-crop-resize',
  templateUrl: './crop-resize.component.html',
  styleUrls: ['./crop-resize.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CropResizeComponent implements OnInit {
  @ViewChild('wrapper', { static: true, read: ElementRef }) wrapperElementRef: ElementRef;
  @ViewChild('preview', { static: true, read: ElementRef }) previewElementRef: ElementRef;
  @ViewChild('rect', { static: true, read: ElementRef }) rectElementRef: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @Input() imageUri: string = 'assets/images/lr-defender-90.jpg';
  image: HTMLImageElement;

  private wrapper: HTMLElement;
  private aspectRatio: number;

  ngOnInit(): void {
    this.wrapper = this.wrapperElementRef.nativeElement;
    this.image = this.createImage(this.imageUri, ['crop-img']);
    this.wrapper.appendChild(this.image);
  }

  cropImage = (): void => {
    const preview = this.previewElementRef.nativeElement as HTMLElement;
    const rect = this.rectElementRef.nativeElement as HTMLElement;
    const canvas = this.document.createElement('canvas');
    // canvas.width = this.image.width;
    // canvas.height = this.image.height;
    const ctx = canvas.getContext('2d');

    ctx.imageSmoothingEnabled = false;

    const { naturalWidth, naturalHeight, offsetTop, offsetLeft } = this.image;
    const { clientWidth, clientHeight, offsetTop: top, offsetLeft: left } = rect;

    const ratioW = +(naturalWidth / this.image.width).toFixed(2);
    const ratioH = +(naturalHeight / this.image.height).toFixed(2);

    canvas.width = clientWidth;
    canvas.height = clientHeight;

    const x = left - offsetLeft;
    const y = top - offsetTop;

    ctx.drawImage(
      this.image,
      x * ratioW,
      y * ratioH,
      clientWidth * ratioW,
      clientHeight * ratioH,
      0,
      0,
      clientWidth,
      clientHeight,
    );

    canvas.toBlob((blob) => {
      const image = this.document.createElement('img');
      const url = URL.createObjectURL(blob);

      image.onload = (event: Event) => {
        URL.revokeObjectURL(url);
      };

      image.src = url;
      preview.append(image);
    });
  };

  private createImage = (uri: string, classes: string[] = []): HTMLImageElement => {
    // const img = new Image();
    const img = this.document.createElement('img');
    classes.forEach((className) => {
      img.classList.add(className);
    });
    this.getAspectRatio(img);
    img.src = uri;
    return img;
  };

  private getAspectRatio = async (image: HTMLImageElement) => {
    await new Promise((resolve) => {
      image.onload = resolve;
    });
    this.aspectRatio = image.width / image.height;
  };
}
