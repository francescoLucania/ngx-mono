import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[baseOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private ref: ElementRef) { }

@HostListener('input', ['$event'])
  private onKeyDown(event: any) {
    const reg = /^\d+$/;
    if (!reg.test(event?.target.value)) {
      this.ref.nativeElement.style.color = 'red';
    } else {
      this.ref.nativeElement.style.color = '';
    }
  }
}
