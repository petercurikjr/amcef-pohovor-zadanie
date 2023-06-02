import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreContainer, FilterType, ITodoList } from '@todoee/core';
import { Icons, UiButtonType } from '@todoee/ui';
import { User } from 'firebase/auth';
import { HomeCreateTodoListModalComponent } from './create-todo-list-modal/home-create-todo-list-modal.component';

@Component({
  selector: 'todoee-home-component',
  templateUrl: './home-component.html',
})
export class HomeComponent extends CoreContainer implements OnInit {
  readonly UiButtonType = UiButtonType;

  private readonly md: MatDialog = inject(MatDialog);

  signedInUser: User;
  todoLists: ITodoList[];
  selectedFilter: FilterType = FilterType.ALL;

  constructor() {
    super();
    this.subscriptions.add(
      this.facade.getSignedInUser$.subscribe(
        (user) => (this.signedInUser = user?.user)
      )
    );
    this.subscriptions.add(
      this.facade.getTodoLists$.subscribe(
        (todoLists) => (this.todoLists = todoLists)
      )
    );
  }

  ngOnInit(): void {
    if (!this.todoLists) this.facade.fetchTodoLists();
  }

  signInWithGoogle(): void {
    this.facade.signInWithGoogle();
  }

  createTodoList(): void {
    this.md.open(HomeCreateTodoListModalComponent);
  }

  applyFilter(filter: FilterType): void {
    this.selectedFilter = filter;
  }
}
