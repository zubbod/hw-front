import { Component, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./custom-overlay-ref";
import * as i2 from "@angular/common";
function CustomLayoutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r0.content, i0.ɵɵsanitizeHtml);
} }
function CustomLayoutComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CustomLayoutComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CustomLayoutComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
} }
function CustomLayoutComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CustomLayoutComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CustomLayoutComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngComponentOutlet", ctx_r2.content);
} }
export class CustomLayoutComponent {
    constructor(overlayRef) {
        this.overlayRef = overlayRef;
        this.renderMethod = 'component';
    }
    ngOnInit() {
        this.content = this.overlayRef.content;
        if (typeof this.content === 'string') {
            this.renderMethod = 'text';
        }
        else if (this.content instanceof TemplateRef) {
            this.renderMethod = 'template';
            this.context = {
                close: this.overlayRef.close.bind(this.overlayRef),
            };
        }
    }
}
CustomLayoutComponent.ɵfac = function CustomLayoutComponent_Factory(t) { return new (t || CustomLayoutComponent)(i0.ɵɵdirectiveInject(i1.CustomOverlayRef)); };
CustomLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomLayoutComponent, selectors: [["lib-custom-layout"]], decls: 5, vars: 4, consts: [[1, "popover"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]], template: function CustomLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, CustomLayoutComponent_div_2_Template, 1, 1, "div", 2);
        i0.ɵɵtemplate(3, CustomLayoutComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
        i0.ɵɵtemplate(4, CustomLayoutComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.renderMethod);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "text");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "template");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "component");
    } }, directives: [i2.NgSwitch, i2.NgSwitchCase, i2.NgTemplateOutlet, i2.NgComponentOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomLayoutComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: i1.CustomOverlayRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWxheW91dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvemIvRG9jdW1lbnRzL2h3LWZyb250L3Byb2plY3RzL2N1c3RvbS1sYXlvdXQvc3JjLyIsInNvdXJjZXMiOlsibGliL2N1c3RvbS1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQVF6RCx5QkFBd0Q7OztJQUE1Qiw2REFBcUI7OztJQUcvQyx3QkFFZ0I7OztJQUhsQiw2QkFDRTtJQUFBLHVHQUVDO0lBQ0gsMEJBQWU7OztJQUZYLGVBQTZDO0lBQTdDLGlEQUE2QywyQ0FBQTs7O0lBSy9DLHdCQUEwRDs7O0lBRDVELDZCQUNFO0lBQUEsdUdBQTJDO0lBQzdDLDBCQUFlOzs7SUFEQyxlQUE0QjtJQUE1QixrREFBNEI7O0FBTWxELE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFBbUIsVUFBNEI7UUFBNUIsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFKL0MsaUJBQVksR0FBc0MsV0FBVyxDQUFDO0lBSVosQ0FBQztJQUVuRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUV2QyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7U0FDNUI7YUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxFQUFFO1lBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ25ELENBQUM7U0FDSDtJQUNILENBQUM7OzBGQWxCVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQWpCcEIsOEJBQ1Y7UUFBQSxnQ0FDRTtRQUFBLHNFQUFrRDtRQUVsRCx3RkFDRTtRQUtGLHdGQUNFO1FBRUosMEJBQWU7UUFDakIsaUJBQU07O1FBYlUsZUFBeUI7UUFBekIsMkNBQXlCO1FBQ2hDLGVBQXNCO1FBQXRCLHFDQUFzQjtRQUViLGVBQTBCO1FBQTFCLHlDQUEwQjtRQU0xQixlQUEyQjtRQUEzQiwwQ0FBMkI7O2tEQU9sQyxxQkFBcUI7Y0FuQmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O1NBY0g7Z0JBQ1AsTUFBTSxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3ZlcmxheUNvbnRlbnQgfSBmcm9tICcuL3R5cGVzL292ZXJsYXktY29udGVudC50eXBlJztcbmltcG9ydCB7IEN1c3RvbU92ZXJsYXlSZWYgfSBmcm9tICcuL2N1c3RvbS1vdmVybGF5LXJlZic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jdXN0b20tbGF5b3V0JyxcbiAgdGVtcGxhdGU6IGAgPGRpdiBjbGFzcz1cInBvcG92ZXJcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJyZW5kZXJNZXRob2RcIj5cbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiIFtpbm5lckhUTUxdPVwiY29udGVudFwiPjwvZGl2PlxuXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIndGVtcGxhdGUnXCI+XG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnQ7IGNvbnRleHQ6IGNvbnRleHRcIlxuICAgICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NvbXBvbmVudCdcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tTGF5b3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcmVuZGVyTWV0aG9kOiAndGVtcGxhdGUnIHwgJ2NvbXBvbmVudCcgfCAndGV4dCcgPSAnY29tcG9uZW50JztcbiAgY29udGVudDogT3ZlcmxheUNvbnRlbnQ7XG4gIGNvbnRleHQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG92ZXJsYXlSZWY6IEN1c3RvbU92ZXJsYXlSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5vdmVybGF5UmVmLmNvbnRlbnQ7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucmVuZGVyTWV0aG9kID0gJ3RleHQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMucmVuZGVyTWV0aG9kID0gJ3RlbXBsYXRlJztcbiAgICAgIHRoaXMuY29udGV4dCA9IHtcbiAgICAgICAgY2xvc2U6IHRoaXMub3ZlcmxheVJlZi5jbG9zZS5iaW5kKHRoaXMub3ZlcmxheVJlZiksXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuIl19