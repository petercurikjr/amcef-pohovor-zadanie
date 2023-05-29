import { Component, Input } from '@angular/core';
import { UiFormControlContainer } from '../../form-util/ui-form-control.container';

@Component({
  selector: 'ui-toggle',
  templateUrl: './ui-toggle.component.html',
})
export class UiToggleComponent extends UiFormControlContainer {
  @Input() label = '';
}
