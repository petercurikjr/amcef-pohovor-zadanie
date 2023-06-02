import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreContainer, ITodoList, Routes } from '@todoee/core';
import { Icons, UiButtonType } from '@todoee/ui';
import { User } from 'firebase/auth';
import { HomeCreateTodoListModalComponent } from './create-todo-list-modal/home-create-todo-list-modal.component';

@Component({
  selector: 'todoee-home-component',
  templateUrl: './home-component.html',
})
export class HomeComponent extends CoreContainer implements OnInit {
  readonly UiButtonType = UiButtonType;
  readonly Icons = Icons;

  private readonly md: MatDialog = inject(MatDialog);

  signedInUser: User;
  todoLists: ITodoList[];

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

  signOut(): void {
    this.facade.signOutWithGoogle();
  }

  createTodoList(): void {
    this.md.open(HomeCreateTodoListModalComponent);
  }

  createTodo(listId: string): void {
    this.navigateTo(Routes.home.createTodoItem, { listId: listId });
  }
}
