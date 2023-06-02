import { Component, EventEmitter, Output } from '@angular/core';
import { FilterType } from '@todoee/core';
import { UiBasicButtonType, UiButtonColor } from '@todoee/ui';

@Component({
  selector: 'todoee-home-todo-item-filter',
  templateUrl: './home-todo-item-filter.component.html',
})
export class HomeTodoItemFilterComponent {
  readonly UiBasicButtonType = UiBasicButtonType;
  readonly UiButtonColor = UiButtonColor;
  readonly FilterType = FilterType;

  selectedFilter = FilterType.ALL;

  @Output() filterSelectionChange = new EventEmitter<FilterType>();

  onSelectedFilter(filterType: FilterType): void {
    if (filterType === this.selectedFilter) return;
    this.selectedFilter = filterType;
    this.filterSelectionChange.emit(filterType);
  }
}
