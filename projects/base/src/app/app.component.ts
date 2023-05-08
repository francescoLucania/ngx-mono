import { Component } from '@angular/core';
import { INavigateList } from 'ngx-neo-ui/lib/components/navigate-list/models/navigate';

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navigate: INavigateList[] = [
    { name: 'Home', uri: '' },
    { name: 'Styles', uri: 'styles' },
    { name: 'Components', uri: 'components' },
    { name: 'Contacts', uri: 'Contacts' },
  ];
}
