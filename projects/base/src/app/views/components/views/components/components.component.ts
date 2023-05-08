import { Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';

@Component({
  selector: 'base-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  public formsMenu: INavigateList[] = [
    {name: 'Button', uri: 'button'},
    {name: 'Input', uri: 'input'}
  ];
}
