(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('custom-layout', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['custom-layout'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var CustomLayoutService = /** @class */ (function () {
        function CustomLayoutService() {
        }
        return CustomLayoutService;
    }());
    CustomLayoutService.ɵfac = function CustomLayoutService_Factory(t) { return new (t || CustomLayoutService)(); };
    CustomLayoutService.ɵprov = i0.ɵɵdefineInjectable({ token: CustomLayoutService, factory: CustomLayoutService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CustomLayoutService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var CustomLayoutComponent = /** @class */ (function () {
        function CustomLayoutComponent() {
        }
        CustomLayoutComponent.prototype.ngOnInit = function () {
        };
        return CustomLayoutComponent;
    }());
    CustomLayoutComponent.ɵfac = function CustomLayoutComponent_Factory(t) { return new (t || CustomLayoutComponent)(); };
    CustomLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomLayoutComponent, selectors: [["lib-custom-layout"]], decls: 2, vars: 0, template: function CustomLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " custom-layout works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CustomLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-custom-layout',
                        template: "\n    <p>\n      custom-layout works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var CustomLayoutModule = /** @class */ (function () {
        function CustomLayoutModule() {
        }
        return CustomLayoutModule;
    }());
    CustomLayoutModule.ɵmod = i0.ɵɵdefineNgModule({ type: CustomLayoutModule });
    CustomLayoutModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CustomLayoutModule_Factory(t) { return new (t || CustomLayoutModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CustomLayoutModule, { declarations: [CustomLayoutComponent], exports: [CustomLayoutComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CustomLayoutModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [CustomLayoutComponent],
                        imports: [],
                        exports: [CustomLayoutComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of custom-layout
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CustomLayoutComponent = CustomLayoutComponent;
    exports.CustomLayoutModule = CustomLayoutModule;
    exports.CustomLayoutService = CustomLayoutService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=custom-layout.umd.js.map
