import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public theme: 'base' | 'secondary' = 'base';
  @Input() public size: 'base' | 'small' | 'big' = 'base';
  @Input() public showLoader = false;

  @Input() public disabled = false;
  @Input() public buttonType: 'submit' | 'reset' | 'button' = 'button';

  @Input() public link = '';
  @Input() public target: '_blank' | '_self' | '_parent' | '_top' = '_self';

  @Output() public click = new EventEmitter<Event>();
}
