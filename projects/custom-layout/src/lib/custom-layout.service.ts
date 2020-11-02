import { Injectable, Injector } from '@angular/core';
import { OverlayParams } from './types/overlay-params.type';
import {
  Overlay,
  OverlayConfig,
  PositionStrategy,
  ConnectionPositionPair,
} from '@angular/cdk/overlay';
import { CustomOverlayRef } from './custom-overlay-ref';
import { PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { CustomLayoutComponent } from './custom-layout.component';

@Injectable({
  providedIn: 'root',
})
export class CustomLayoutService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>({
    element,
    data,
    content,
    width,
    height,
  }: OverlayParams<T>): CustomOverlayRef {
    const overlay = this.overlay.create(
      this.getOverlayConfig({ element, width, height })
    );

    const overlayRef = new CustomOverlayRef(overlay, content, data);

    const injector = this.createInjector(overlayRef, this.injector);

    overlay.attach(new ComponentPortal(CustomLayoutComponent, null, injector));

    return overlayRef;
  }

  private createInjector(
    overlayRef: CustomOverlayRef,
    injector: Injector
  ): PortalInjector {
    const tokens = new WeakMap([[CustomOverlayRef, overlayRef]]);

    return new PortalInjector(injector, tokens);
  }

  private getOverlayConfig({ element, width, height }): OverlayConfig {
    return new OverlayConfig({
      width,
      height,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      positionStrategy: this.getOverlayPosition(element),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
  }

  private getOverlayPosition(element: HTMLElement): PositionStrategy {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(element)
      .withPositions(this.getPositions())
      .withPush(false);

    return positionStrategy;
  }

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      },
    ];
  }
}
