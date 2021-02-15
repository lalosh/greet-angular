import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class GreetLibraryService {
    constructor() { }
}
GreetLibraryService.ɵprov = ɵɵdefineInjectable({ factory: function GreetLibraryService_Factory() { return new GreetLibraryService(); }, token: GreetLibraryService, providedIn: "root" });
GreetLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GreetLibraryService.ctorParameters = () => [];

class GreetLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GreetLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-greet-library',
                template: `
    <p>
      greet-library works!
    </p>
  `
            },] }
];
GreetLibraryComponent.ctorParameters = () => [];

class GreetLibraryModule {
}
GreetLibraryModule.decorators = [
    { type: NgModule, args: [{
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

export { GreetLibraryComponent, GreetLibraryModule, GreetLibraryService };
//# sourceMappingURL=greet-library.js.map
