import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    UiComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
