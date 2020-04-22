import { Directive, ViewContainerRef } from '@angular/core';
@Directive({
    selector: '[appPlaceholder]'
})
export class ComponentPlaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
