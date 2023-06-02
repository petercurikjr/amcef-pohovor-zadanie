import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreContainer, ITodoList } from '@todoee/core';
import { Icons, UiButtonType } from '@todoee/ui';
import { User } from 'firebase/auth';
import { HomeCreateTodolistModalComponent } from './create-todolist-modal/home-create-todolist-modal.component';

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
    this.md.open(HomeCreateTodolistModalComponent);
  }
}
