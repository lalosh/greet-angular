(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('greet-library', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['greet-library'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var GreetLibraryService = /** @class */ (function () {
        function GreetLibraryService() {
        }
        return GreetLibraryService;
    }());
    GreetLibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GreetLibraryService_Factory() { return new GreetLibraryService(); }, token: GreetLibraryService, providedIn: "root" });
    GreetLibraryService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    GreetLibraryService.ctorParameters = function () { return []; };

    var GreetLibraryComponent = /** @class */ (function () {
        function GreetLibraryComponent() {
        }
        GreetLibraryComponent.prototype.ngOnInit = function () {
        };
        return GreetLibraryComponent;
    }());
    GreetLibraryComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-greet-library',
                    template: "\n    <p>\n      greet-library works!\n    </p>\n  "
                },] }
    ];
    GreetLibraryComponent.ctorParameters = function () { return []; };

    var GreetLibraryModule = /** @class */ (function () {
        function GreetLibraryModule() {
        }
        return GreetLibraryModule;
    }());
    GreetLibraryModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [GreetLibraryComponent],
                    imports: [],
                    exports: [GreetLibraryComponent]
                },] }
    ];

    /*
     * Public API Surface of greet-library
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.GreetLibraryComponent = GreetLibraryComponent;
    exports.GreetLibraryModule = GreetLibraryModule;
    exports.GreetLibraryService = GreetLibraryService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=greet-library.umd.js.map
