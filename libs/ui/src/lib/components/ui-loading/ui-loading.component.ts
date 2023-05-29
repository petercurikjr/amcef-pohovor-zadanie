import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-loading',
  templateUrl: './ui-loading.component.html',
})
export class UiLoadingComponent {
  @Input() whitenedBackground = false;
}
