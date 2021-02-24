import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'div[move]',
})
export class MoveDirective {
  private isMovingMode = false;
  private element: HTMLElement;
  private parentElement: HTMLElement;
  private top: number = 0;
  private left: number = 0;
  private diffTop: number = 0;
  private diffLeft: number = 0;
  constructor(elRef: ElementRef) {
    this.element = elRef.nativeElement;
    this.parentElement = this.element.parentElement;
    this.element.style.cursor = 'move';
  }

  @HostListener('mousedown', ['$event']) mouseDown(event: MouseEvent): void {
    if (event.target !== this.element) {
      return;
    }
    this.isMovingMode = true;
    this.top = event.clientY;
    this.left = event.clientX;
    this.diffLeft = this.left - this.element.offsetLeft;
    this.diffTop = this.top - this.element.offsetTop;
  }

  @HostListener('mousemove', ['$event']) mouseMove(event: MouseEvent): void {
    event.preventDefault();
    if (!this.isMovingMode) return;

    this.left = event.clientX;
    this.top = event.clientY;

    this.element.style.top = `${this.top - this.diffTop}px`;
    this.element.style.left = `${this.left - this.diffLeft}px`;

    console.log('element', this.element);

    this.checkBorders();
  }

  @HostListener('mouseleave')
  @HostListener('mouseup')
  mouseUp(): void {
    this.isMovingMode = false;
  }

  private checkBorders = (): void => {
    const top = parseInt(this.element.style.top);
    const left = parseInt(this.element.style.left);
    if (top < 0) {
      this.element.style.top = `0px`;
    }

    if (left < 0) {
      this.element.style.left = `0px`;
    }

    if (left + this.element.clientWidth > this.parentElement.offsetWidth) {
      this.element.style.left = `${this.parentElement.offsetWidth - this.element.clientWidth}px`;
    }

    if (top + this.element.clientHeight > this.parentElement.offsetHeight) {
      this.element.style.top = `${this.parentElement.offsetHeight - this.element.clientHeight}px`;
    }
  };
}
