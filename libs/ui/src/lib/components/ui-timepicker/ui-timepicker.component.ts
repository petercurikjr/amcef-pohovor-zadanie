import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UiFormControlContainer } from '../../form-util/ui-form-control.container';

@Component({
  selector: 'ui-timepicker',
  templateUrl: './ui-timepicker.component.html',
  styleUrls: ['./ui-timepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiTimepickerComponent extends UiFormControlContainer {
  @Input() label = '';

  time: string;
}
