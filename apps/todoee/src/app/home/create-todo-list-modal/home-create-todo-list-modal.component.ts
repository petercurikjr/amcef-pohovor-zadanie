import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreContainer, ICreateTodoListForm, ITodoList } from '@todoee/core';
import { UiBasicButtonType, UiButtonColor } from '@todoee/ui';
import { v4 as uuidv4 } from 'uuid';

@Component({
  templateUrl: './home-create-todo-list-modal.component.html',
})
export class HomeCreateTodoListModalComponent extends CoreContainer {
  readonly UiButtonColor = UiButtonColor;
  readonly UiBasicButtonType = UiBasicButtonType;

  isLoading = false;
  form: FormGroup<ICreateTodoListForm>;

  constructor(
    protected dialogRef: MatDialogRef<HomeCreateTodoListModalComponent>
  ) {
    super();
    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
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
    this.facade.createTodoList(request, () => this.dialogRef.close());
  }
}
