import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CoreContainer,
  DateFormat,
  FormControlValidators,
  ICreateTodoItemForm,
  ITodoItem,
  ITodoList,
  Routes,
} from '@todoee/core';
import { UiBasicButtonType, UiButtonColor, UiInputInputType } from '@todoee/ui';
import { v4 as uuidv4 } from 'uuid';
import { parse } from 'date-fns';
import { Timestamp } from 'firebase/firestore';
import { cloneDeep } from 'lodash-es';

@Component({
  templateUrl: './home-create-todo-item.component.html',
})
export class HomeCreateTodoItemComponent extends CoreContainer {
  readonly UiButtonColor = UiButtonColor;
  readonly UiBasicButtonType = UiBasicButtonType;
  readonly UiInputInputType = UiInputInputType;

  isLoading = false;
  parentList: ITodoList;
  form: FormGroup<ICreateTodoItemForm>;

  constructor() {
    super();
    this.initForm();
    this.subscriptions.add(
      this.activatedRoute.queryParams.subscribe((params) => {
        if (params['listId'])
          this.subscriptions.add(
            this.facade.getTodoLists$.subscribe(
              (lists) =>
                (this.parentList = lists?.find(
                  (list) => list.id === params['listId']
                ))
            )
          );
      })
    );
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [],
      dueDate: new FormControl<Date>(null, [
        FormControlValidators.dateFromThePastValidator(),
        FormControlValidators.invalidDateFormatValidator(DateFormat.DATE),
        Validators.required,
      ]),
      dueTime: new FormControl<string>(null, [
        FormControlValidators.invalidDateFormatValidator(DateFormat.TIME),
        Validators.required,
      ]),
    });
  }

  createTodoItem(): void {
    if (!this.form.valid) return;
    this.isLoading = true;

    const convertedTime = parse(this.form.value.dueTime, 'HH:mm', new Date());
    this.form.value.dueDate.setHours(
      convertedTime.getHours(),
      convertedTime.getMinutes()
    );

    const todoItem: ITodoItem = {
      id: uuidv4(),
      listId: this.parentList.id,
      name: this.form.value.name,
      description: this.form.value.description,
      isCompleted: false,
      due: Timestamp.fromDate(this.form.value.dueDate),
    };

    const parentListCopy = cloneDeep(this.parentList);
    parentListCopy.todos.push(todoItem);

    this.facade.addTodoItemToParentList(parentListCopy, () =>
      this.navigateTo(Routes.home.base)
    );
  }
}
