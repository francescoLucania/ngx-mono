import { Component } from '@angular/core';
import { IHeaderNavigate } from '../../../../../../dist/ui/lib/components/header/models/navigate';

@Component({
  selector: 'base-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public navigate: IHeaderNavigate[] = [
    { name: 'Home', uri: '/' },
    { name: 'Styles', uri: '/components' },
    { name: 'UI lib', uri: '/ui-lib' },
    { name: 'Contacts', uri: '/Contacts' },
  ];
}
