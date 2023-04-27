import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { UiRoutingModule } from './ui-routing.module';
import { ButtonModule, FooterModule, HeaderModule, ModalModule } from 'ui';

@NgModule({
  declarations: [UiComponent],
  imports: [CommonModule, UiRoutingModule, HeaderModule, FooterModule, ModalModule, ButtonModule],
})
export class UiModule {}
