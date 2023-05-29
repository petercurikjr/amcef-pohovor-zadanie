import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-icon',
  templateUrl: './ui-icon.component.html',
})
export class UiIconComponent {
  @Input() set path(value: string) {
    this._path = value;
    // remove path to file and file extension and keep only filename
    this.alt = value.substring(
      value.lastIndexOf('/') + 1,
      value.lastIndexOf('.')
    );
  }
  @Input() size = '1rem';

  alt: string;
  _path: string;
}
