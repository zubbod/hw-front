import { Injector } from '@angular/core';
import { OverlayParams } from './types/overlay-params.type';
import { Overlay } from '@angular/cdk/overlay';
import { CustomOverlayRef } from './custom-overlay-ref';
import * as i0 from "@angular/core";
export declare class CustomLayoutService {
    private overlay;
    private injector;
    constructor(overlay: Overlay, injector: Injector);
    open<T>({ element, data, content, width, height, }: OverlayParams<T>): CustomOverlayRef;
    private createInjector;
    private getOverlayConfig;
    private getOverlayPosition;
    private getPositions;
    static ɵfac: i0.ɵɵFactoryDef<CustomLayoutService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CustomLayoutService>;
}
