import { Component } from '@angular/core';
import { IHeaderNavigate } from '../../../../../../dist/ui/lib/components/header/models/navigate';

@Component({
  selector: 'base-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent {
  public navigate: IHeaderNavigate[] = [
    { name: 'Home', uri: '/' },
    { name: 'Styles', uri: '/components' },
    { name: 'UI lib', uri: '/ui-lib' },
    { name: 'Contacts', uri: '/Contacts' },
  ];
}
