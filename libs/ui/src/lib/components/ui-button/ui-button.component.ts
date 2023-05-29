import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UiBasicButtonType,
  UiButtonColor,
  UiButtonType,
} from '../../models/ui-model';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
})
export class UiButtonComponent {
  @Input() buttonText?: string;

  @Input() icon?: string;
  @Input() iconSize: string = '1.25rem';

  @Input() disabled = false;

  @Input() buttonType = UiButtonType.BASIC;
  @Input() basicButtonType = UiBasicButtonType.FILL;
  @Input() buttonColor = UiButtonColor.PINK;

  // custom click event to prevent clicks outside html button element
  @Output() buttonClick = new EventEmitter<void>();

  readonly UiButtonType = UiButtonType;
  readonly UiBasicButtonType = UiBasicButtonType;
  readonly UiButtonColor = UiButtonColor;
}
