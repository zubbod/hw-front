import { Component, OnInit, TemplateRef } from '@angular/core';
import { OverlayContent } from './types/overlay-content.type';
import { CustomOverlayRef } from './custom-overlay-ref';

@Component({
  selector: 'lib-custom-layout',
  template: ` <div class="popover">
    <ng-container [ngSwitch]="renderMethod">
      <div *ngSwitchCase="'text'" [innerHTML]="content"></div>

      <ng-container *ngSwitchCase="'template'">
        <ng-container
          *ngTemplateOutlet="content; context: context"
        ></ng-container>
      </ng-container>

      <ng-container *ngSwitchCase="'component'">
        <ng-container *ngComponentOutlet="content"></ng-container>
      </ng-container>
    </ng-container>
  </div>`,
  styles: [],
})
export class CustomLayoutComponent implements OnInit {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: OverlayContent;
  context;

  constructor(public overlayRef: CustomOverlayRef) {}

  ngOnInit(): void {
    this.content = this.overlayRef.content;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    } else if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.overlayRef.close.bind(this.overlayRef),
      };
    }
  }
}
