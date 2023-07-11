import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './views/components/components.component';
import { ButtonComponent } from './views/button/button.component';
import { InputComponent } from './views/input/input.component';
import { CodeComponent } from './components/code/code.component';
import { NavigateListModule, ButtonModule, InputModule } from 'ngx-neo-ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './views/radio/radio.component';
import { RadioModule } from '../../../../../ui/src/lib/components/radio';

@NgModule({
  declarations: [ComponentsComponent, ButtonComponent, InputComponent, CodeComponent, RadioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsRoutingModule,
    NavigateListModule,
    ButtonModule,
    InputModule,
    RadioModule

  ],
})
export class ComponentsModule {}
