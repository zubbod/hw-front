import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { CONTROLS, DEFAULT_SIZES } from '../constants/constants';
import { ControlId, Position } from '../enums/enums';
import { Control, Styles } from '../types/types';

@Directive({
  selector: '[resize]',
})
export class ResizeDirective implements AfterViewInit {
  @Input() controlBgColor = '#39f';
  @Input() aspectRatio = Object.values(DEFAULT_SIZES).join(':');
  @Input() private imgRef: HTMLImageElement;

  private hostElRef: HTMLElement;
  private currentControl: HTMLElement;
  private resizeMode = false;
  private clickX = 0;
  private clickY = 0;
  private originalWidth = 0;
  private originalLeft = 0;
  private originalTop = 0;
  private originalHeight = 0;
  private ratio: number[] = [];
  private resizeOnScroll = false;

  constructor(private elRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.hostElRef = elRef.nativeElement;
  }

  @HostListener('mousedown', ['$event']) setResizeMode = (event: MouseEvent): void => {
    const control = CONTROLS.find((control) => control.id === (event.target as HTMLElement).id);
    if (!control) return;
    this.currentControl = event.target as HTMLElement;
    this.resizeMode = true;
    this.clickX = event.x;
    this.clickY = event.y;
    const { width, height } = this.hostElRef.getBoundingClientRect();
    this.originalWidth = width;
    this.originalHeight = height;
    this.originalLeft = parseInt(this.hostElRef.style.left);
    this.originalTop = parseInt(this.hostElRef.style.top);
  };

  @HostListener('window:mousemove', ['$event']) resize = (event: MouseEvent): void => {
    event.preventDefault();
    if (!this.resizeMode) return;
    let { width, left, top, height } = this.resetStyles();
    switch (this.currentControl.id) {
      case ControlId.TopLeft:
        width = this.originalWidth - (event.x - this.clickX);
        left = this.originalLeft + (event.x - this.clickX);
        top = this.originalTop + (event.y - this.clickY);
        height = this.originalHeight - (event.y - this.clickY);
        this.applyStyles(this.hostElRef, { width, height, left, top });
        break;
      case ControlId.TopRight:
        width = this.originalWidth + (event.x - this.clickX);
        top = this.originalTop + (event.y - this.clickY);
        height = this.originalHeight - (event.y - this.clickY);
        this.applyStyles(this.hostElRef, { width, height, top });
        break;
      case ControlId.BottomRight:
        width = this.originalWidth + (event.x - this.clickX);
        height = this.originalHeight + (event.y - this.clickY);
        this.applyStyles(this.hostElRef, { width, height });
        break;
      case ControlId.BottomLeft:
        width = this.originalWidth - (event.x - this.clickX);
        height = this.originalHeight + (event.y - this.clickY);
        left = this.originalLeft + (event.x - this.clickX);
        this.applyStyles(this.hostElRef, { width, height, left });
        break;
      default:
        break;
    }
  };

  @HostListener('window:mouseup', ['$event']) unsetResizeMode = (event: MouseEvent): void => {
    this.resizeMode = false;
  };

  @HostListener('mousewheel', ['$event']) resizeImage = (event: WheelEvent): void => {
    if (this.resizeOnScroll) {
      this.imgRef.width += event.deltaY / 5;
    }
  };

  ngAfterViewInit() {
    this.initSize();
    this.center();
    this.createControls(CONTROLS).forEach((el) => {
      this.hostElRef.appendChild(el);
    });
    if (this.imgRef) {
      this.resizeOnScroll = true;
    }
  }

  private getHeightFromRatio = (width: number): number => (width / this.ratio[0]) * this.ratio[1];

  private resetStyles = (): Styles => ({ width: 0, left: 0, top: 0, height: 0 });

  private initSize = (): void => {
    if (!this.aspectRatio) {
      this.hostElRef.style.width = `${DEFAULT_SIZES.width}px`;
      this.hostElRef.style.height = `${DEFAULT_SIZES.height}px`;
    } else {
      this.ratio = this.aspectRatio.split(':').map((el) => Number(el));
      this.hostElRef.style.width = `${DEFAULT_SIZES.width}px`;
      this.hostElRef.style.height = `${(DEFAULT_SIZES.width / this.ratio[0]) * this.ratio[1]}px`;
    }
  };

  private center = (): void => {
    this.hostElRef.style.top = `${
      this.hostElRef.parentElement.offsetHeight / 2 - DEFAULT_SIZES.height / 2
    }px`;
    this.hostElRef.style.left = `${
      this.hostElRef.parentElement.offsetWidth / 2 - DEFAULT_SIZES.width / 2
    }px`;
  };

  private applyStyles = (el: HTMLElement, styles: Styles): void => {
    // if (styles.width < DEFAULT_SIZES.width) {
    //   styles.width = DEFAULT_SIZES.width;
    //   this.resizeMode = false;
    // }
    // if (styles.height < DEFAULT_SIZES.height) {
    //   styles.height = DEFAULT_SIZES.height;
    //   this.resizeMode = false;
    // }
    Object.entries(styles).forEach((style) => (el.style[style[0]] = `${style[1]}px`));
  };

  private createControls = (controls: Control[]): HTMLElement[] => {
    const elements = controls.map((control) => {
      const span = this.document.createElement('span');
      for (let prop in control) {
        span.style[prop] = control[prop];
      }
      span.setAttribute('id', control.id);
      this.setAdditionalStyles(span);
      this.setCursour(span);
      return span;
    });
    return elements;
  };

  private setAdditionalStyles = (el: HTMLElement): void => {
    el.style.backgroundColor = this.controlBgColor;
    el.style.position = Position.Absolute;
    el.style.zIndex = '10';
  };

  private setCursour = (el: HTMLElement): void => {
    switch (el.id) {
      case ControlId.TopLeft:
      case ControlId.BottomRight:
        el.style.cursor = 'nwse-resize';
        break;
      case ControlId.TopRight:
      case ControlId.BottomLeft:
        el.style.cursor = 'nesw-resize';
        break;
    }
  };
}
