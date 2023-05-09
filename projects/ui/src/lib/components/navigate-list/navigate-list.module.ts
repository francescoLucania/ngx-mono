import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigateListComponent } from './navigate-list.component';

@NgModule({
  declarations: [NavigateListComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigateListComponent],
})
export class NavigateListModule {}
