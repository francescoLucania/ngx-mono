import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[baseGenerateInputs]'
})
export class GenerateInputsDirective {
  @Input() public set baseGenerateInputs(count: number) {
    for (let i = 0; i< count; i++) {
      const selector = this.renderer.createElement('div');
      this.renderer.appendChild(selector, this.renderer.createElement('input'))
      this.renderer.appendChild(this.elementRef.nativeElement, selector);
    }
  }
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    ) { }

}
