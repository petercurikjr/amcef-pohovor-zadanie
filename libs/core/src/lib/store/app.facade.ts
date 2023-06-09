import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as selectors from './app.selectors';
import * as actions from './app.actions';
import { User } from '@angular/fire/auth';
import { ITodoItem, ITodoList } from '../models/app.model';

@Injectable()
export class AppFacade {
  getSignedInUser$ = this.store.pipe(select(selectors.selectSignedInUser));
  getTodoLists$ = this.store.pipe(select(selectors.selectTodoLists));

  constructor(private store: Store<AppState>) {}

  // auth
  signInWithGoogle(): void {
    this.store.dispatch(actions.authSignInWithGoogleRequestAction());
  }

  updateGoogleSignedInUser(user: User): void {
    this.store.dispatch(actions.authGoogleAuthStateChangedAction({ user }));
  }

  signOutWithGoogle(): void {
    this.store.dispatch(actions.authSignOutWithGoogleAction());
  }

  // todos
  fetchTodoLists(signedInUser: User): void {
    this.store.dispatch(
      actions.todoFetchTodoListsRequestAction({ signedInUser })
    );
  }

  modifyTodoList(todoList: ITodoList, onSuccess?: () => void): void {
    this.store.dispatch(
      actions.todoModifyTodoListRequestAction({
        todoList,
        onSuccess,
      })
    );
  }
}
