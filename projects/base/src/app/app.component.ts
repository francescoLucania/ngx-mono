import { Component } from '@angular/core';
import { IHeaderNavigate } from 'ngx-neo-ui/lib/components/header/models/navigate';

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navigate: IHeaderNavigate[] = [
    { name: 'Home', uri: '' },
    { name: 'Styles', uri: 'components' },
    { name: 'Components', uri: 'components' },
    { name: 'Contacts', uri: 'Contacts' },
  ];
}
