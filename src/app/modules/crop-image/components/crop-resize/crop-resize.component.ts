import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-crop-resize',
  templateUrl: './crop-resize.component.html',
  styleUrls: ['./crop-resize.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CropResizeComponent implements OnInit {
  @ViewChild('wrapper', { static: true, read: ElementRef }) wrapperElementRef: ElementRef;

  constructor() {}

  @Input() imageUri: string = 'assets/images/lr-defender-90.jpg';
  image: HTMLImageElement;

  private wrapper: HTMLElement;
  private aspectRatio: number;

  ngOnInit(): void {
    this.wrapper = this.wrapperElementRef.nativeElement;
    this.image = this.createImage(this.imageUri, ['crop-img']);
    this.wrapper.appendChild(this.image);
  }

  private createImage = (uri: string, classes: string[] = []): HTMLImageElement => {
    const img = new Image();
    img.src = uri;
    classes.forEach((className) => {
      img.classList.add(className);
    });
    this.getAspectRatio(img);
    return img;
  };

  private getAspectRatio = async (image: HTMLImageElement) => {
    await new Promise((resolve) => {
      image.onload = resolve;
    });
    this.aspectRatio = image.width / image.height;
  };
}
