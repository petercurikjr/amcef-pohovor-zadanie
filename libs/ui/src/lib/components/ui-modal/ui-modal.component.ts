import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-modal',
  templateUrl: './ui-modal.component.html',
})
export class UiModalComponent {
  @Input() title = '';
}
