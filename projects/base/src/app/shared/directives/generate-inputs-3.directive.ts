import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
// context of the directive
interface RangeContext {
  $implicit: number; // current item exposed as implicit value, enables declaring in template variable via let keyword
  index: number;     // current index of the item
  first: boolean;    // indicates if the item is first in the collection
  last: boolean;     // indicates if the item is last in the collection
}

@Directive({
  selector: '[baseGenerateInputs3]'
})
export class GenerateInputs3Directive {
  @Input() public set baseGenerateInputs3(count: number) {
    this.viewRef.clear();
    const [from, to] = Array.isArray(count) ? count : [0, count];
    const range = this.generateValues(from, to);

    range.forEach(
      (itemNumber, index) =>
        this.viewRef.createEmbeddedView(this.templateRef, {
          $implicit: itemNumber,
          index,
          first: index === 0,
          last: index + 1 === range.length,
        })
    );
  }

  constructor(
    private readonly viewRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<RangeContext>,
    private renderer: Renderer2,
  ) {
  }

  private generateValues(from: number = 0, to: number): number[] {
    return Array.from({length: (to - from)}, (_, index) => index + from);
  }

}
