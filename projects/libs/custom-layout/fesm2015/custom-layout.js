import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class CustomLayoutService {
    constructor() { }
}
CustomLayoutService.ɵfac = function CustomLayoutService_Factory(t) { return new (t || CustomLayoutService)(); };
CustomLayoutService.ɵprov = ɵɵdefineInjectable({ token: CustomLayoutService, factory: CustomLayoutService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomLayoutService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class CustomLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomLayoutComponent.ɵfac = function CustomLayoutComponent_Factory(t) { return new (t || CustomLayoutComponent)(); };
CustomLayoutComponent.ɵcmp = ɵɵdefineComponent({ type: CustomLayoutComponent, selectors: [["lib-custom-layout"]], decls: 2, vars: 0, template: function CustomLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " custom-layout works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'lib-custom-layout',
                template: `
    <p>
      custom-layout works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class CustomLayoutModule {
}
CustomLayoutModule.ɵmod = ɵɵdefineNgModule({ type: CustomLayoutModule });
CustomLayoutModule.ɵinj = ɵɵdefineInjector({ factory: function CustomLayoutModule_Factory(t) { return new (t || CustomLayoutModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CustomLayoutModule, { declarations: [CustomLayoutComponent], exports: [CustomLayoutComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomLayoutModule, [{
        type: NgModule,
        args: [{
                declarations: [CustomLayoutComponent],
                imports: [],
                exports: [CustomLayoutComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of custom-layout
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomLayoutComponent, CustomLayoutModule, CustomLayoutService };
//# sourceMappingURL=custom-layout.js.map
