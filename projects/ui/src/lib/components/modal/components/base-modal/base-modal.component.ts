import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'esia-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
})
export class BaseModalComponent {
  public title: string;
  public content: TemplateRef<any>;
}
