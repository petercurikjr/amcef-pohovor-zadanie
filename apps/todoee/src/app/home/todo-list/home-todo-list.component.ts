import { Component, Input } from '@angular/core';
import { CoreContainer, ITodoList, Routes } from '@todoee/core';
import { Icons, UiButtonType } from '@todoee/ui';

@Component({
  selector: 'todoee-home-todo-list',
  templateUrl: './home-todo-list.component.html',
})
export class HomeTodoListComponent extends CoreContainer {
  readonly UiButtonType = UiButtonType;
  readonly Routes = Routes;
  readonly Icons = Icons;

  @Input() list: ITodoList;

  createTodoItem(listId: string): void {
    this.navigateTo(Routes.home.createTodoItem, { listId: listId });
  }

  deleteTodoItem(itemId: string): void {
    // TODO
  }

  toggleCompleted(itemId: string): void {
    // TODO
  }
}
