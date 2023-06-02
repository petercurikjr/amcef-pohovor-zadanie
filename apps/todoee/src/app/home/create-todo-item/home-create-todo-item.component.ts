import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CoreContainer, ICreateTodoItemForm, ITodoList } from '@todoee/core';
import { UiBasicButtonType, UiButtonColor } from '@todoee/ui';
import { v4 as uuidv4 } from 'uuid';

@Component({
  templateUrl: './home-create-todo-item.component.html',
})
export class HomeCreateTodoItemComponent extends CoreContainer {
  readonly UiButtonColor = UiButtonColor;
  readonly UiBasicButtonType = UiBasicButtonType;

  isLoading = false;
  form: FormGroup<ICreateTodoItemForm>;

  constructor() {
    super();
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      dueDate: [],
      dueTime: [],
    });
  }

  createTodoList(): void {
    if (!this.form.valid) return;
    this.isLoading = true;
    const request: ITodoList = {
      id: uuidv4(),
      name: this.form.value.name,
      todos: [],
    };
  }
}
