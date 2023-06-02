import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  CoreContainer,
  FilterType,
  ISearchForm,
  ITodoList,
  Routes,
} from '@todoee/core';
import { Icons, UiButtonType } from '@todoee/ui';
import { cloneDeep } from 'lodash-es';

@Component({
  selector: 'todoee-home-todo-list',
  templateUrl: './home-todo-list.component.html',
})
export class HomeTodoListComponent extends CoreContainer implements OnInit {
  readonly UiButtonType = UiButtonType;
  readonly Routes = Routes;
  readonly Icons = Icons;

  unfilteredListCopy: ITodoList;
  _list: ITodoList;

  form: FormGroup<ISearchForm>;

  @Input() set list(list: ITodoList) {
    this._list = list;
    this.unfilteredListCopy = list;
  }
  @Input() set filter(filter: FilterType) {
    switch (filter) {
      case FilterType.ALL:
        this._list = this.unfilteredListCopy;
        break;
      case FilterType.ACTIVE:
        const active = this.unfilteredListCopy?.todos?.filter(
          (item) => !item.isCompleted
        );
        this._list = { ...this.unfilteredListCopy, todos: active };
        break;
      case FilterType.COMPLETED:
        const completed = this.unfilteredListCopy?.todos?.filter(
          (item) => item.isCompleted
        );
        this._list = { ...this.unfilteredListCopy, todos: completed };
        break;
    }
  }

  constructor() {
    super();
    this.initForm();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.form.valueChanges.subscribe(
        (v) =>
          (this._list = {
            ...this.unfilteredListCopy,
            todos: this.unfilteredListCopy.todos.filter((item) =>
              item.name.includes(v.search)
            ),
          })
      )
    );
  }

  private initForm(): void {
    this.form = this.fb.group({
      search: [''],
    });
  }

  createTodoItem(listId: string): void {
    this.navigateTo(Routes.home.createTodoItem, { listId: listId });
  }

  deleteTodoItem(index: number): void {
    const listCopy = cloneDeep(this._list);
    listCopy.todos.splice(index, 1);
    this.facade.modifyTodoList(listCopy);
  }

  toggleCompleted(index: number): void {
    const listCopy = cloneDeep(this._list);
    listCopy.todos[index].isCompleted = !listCopy.todos[index].isCompleted;
    this.facade.modifyTodoList(listCopy);
  }
}
