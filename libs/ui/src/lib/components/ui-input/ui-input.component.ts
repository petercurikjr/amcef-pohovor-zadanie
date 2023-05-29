import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UiFormControlContainer } from '../../form-util/ui-form-control.container';
import { UiInputFormatType, UiInputInputType } from '../../models/ui-model';

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiInputComponent extends UiFormControlContainer {
  @Input() placeholder = '';
  @Input() label = '';
  @Input() formatType = UiInputFormatType.TEXT;
  @Input() inputType = UiInputInputType.INPUT;

  readonly UiInputFormatType = UiInputFormatType;
  readonly UiInputInputType = UiInputInputType;
  inputText: string;
}
