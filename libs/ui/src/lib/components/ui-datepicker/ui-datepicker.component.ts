import { Component, Input, ViewEncapsulation } from '@angular/core';
import { parse } from 'date-fns/esm';
import { UiFormControlContainer } from '../../form-util/ui-form-control.container';

@Component({
  selector: 'ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: ['./ui-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiDatepickerComponent extends UiFormControlContainer {
  @Input() label = '';
  @Input() minDate = new Date();
  @Input() maxDate: Date;

  date: Date;

  onDateInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.onChange(value === '' ? null : parse(value, 'dd.MM.yyyy', new Date()));
  }
}
