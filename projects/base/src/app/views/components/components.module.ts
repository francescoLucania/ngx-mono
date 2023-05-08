import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './views/components/components.component';
import { ButtonComponent } from './views/button/button.component';
import { InputComponent } from './views/input/input.component';
import { CodeComponent } from './components/code/code.component';
import { ButtonModule, NavigateListModule } from 'ngx-neo-ui';



@NgModule({
  declarations: [
    ComponentsComponent,
    ButtonComponent,
    InputComponent,
    CodeComponent
  ],
  imports: [
    CommonModule, ComponentsRoutingModule, NavigateListModule, ButtonModule,
  ],
})
export class ComponentsModule { }
