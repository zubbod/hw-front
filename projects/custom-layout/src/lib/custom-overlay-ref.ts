import { Subject } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';
import { OverlayContent } from './types/overlay-content.type';
import { OverlayCloseEvent } from './types/overlay-close-event.type';

export class CustomOverlayRef<T = any> {
  private afterClose: Subject<OverlayCloseEvent<T>> = new Subject();
  afterClose$ = this.afterClose.asObservable();

  constructor(
    private overlayRef: OverlayRef,
    public content: OverlayContent,
    public data: T
  ) {
    this.overlayRef
      .backdropClick()
      .subscribe(() => this._close('backdropClick', data));
  }

  close(data?: T) {
    this._close('close', data);
  }

  private _close(type, data) {
    this.overlayRef.dispose();
    this.afterClose.next({
      type,
      data,
    });
    this.afterClose.complete();
  }
}
