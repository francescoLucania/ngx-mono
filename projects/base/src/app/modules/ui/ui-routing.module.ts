import { RouterModule, Routes } from '@angular/router';
import { UiComponent } from './ui.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: UiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
