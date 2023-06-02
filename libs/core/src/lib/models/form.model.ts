import { FormControl } from '@angular/forms';

export interface ICreateTodoListForm {
  name: FormControl<string>;
}

export interface ICreateTodoItemForm {
  name: FormControl<string>;
  description: FormControl<string>;
  dueDate: FormControl<Date>;
  dueTime: FormControl<string>;
}

export interface ISearchForm {
  search: FormControl<string>;
}
