import { OnInit } from '@angular/core';
import { OverlayContent } from './types/overlay-content.type';
import { CustomOverlayRef } from './custom-overlay-ref';
import * as i0 from "@angular/core";
export declare class CustomLayoutComponent implements OnInit {
    overlayRef: CustomOverlayRef;
    renderMethod: 'template' | 'component' | 'text';
    content: OverlayContent;
    context: any;
    constructor(overlayRef: CustomOverlayRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<CustomLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CustomLayoutComponent, "lib-custom-layout", never, {}, {}, never, never>;
}
