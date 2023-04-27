import { Component, HostListener, Input, Renderer2 } from '@angular/core';
import { IHeaderNavigate } from './models/navigate';

@Component({
  selector: 'neo-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public navigate: IHeaderNavigate[] = [];
  @Input() public fullWidth = false;

  public scrolled = false;
  public mobileMenuState = false;
  public mobileMenuStateClose = false;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll() {
    this.scrolled = (window as any)?.scrollY > 0;

    if (this.scrolled) {
      this.renderer.addClass((document as any)?.querySelector('body'), 'scrolled');
    } else {
      this.renderer.removeClass((document as any)?.querySelector('body'), 'scrolled');
    }
  }

  public changeMenu(): void {
    if (this.mobileMenuState) {
      this.mobileMenuStateClose = true;
      setTimeout(() => {
        this.mobileMenuState = !this.mobileMenuState;
        this.mobileMenuStateClose = false;
      }, 1200);
    } else {
      this.mobileMenuState = !this.mobileMenuState;
    }
  }
}
