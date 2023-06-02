import { createAction, props } from '@ngrx/store';
import { User, UserCredential } from '@angular/fire/auth/firebase';
import { ITodoList } from '../models/app.model';

// auth
export const authSignInWithGoogleRequestAction = createAction(
  '[AUTH] sign in with google request action'
);

export const authSignInWithGoogleResponseAction = createAction(
  '[AUTH] sign in with google response action',
  props<{ user: UserCredential }>()
);

export const authGoogleAuthStateChangedAction = createAction(
  '[AUTH] google auth state changed action',
  props<{ user: User }>()
);

export const authSignOutWithGoogleAction = createAction(
  '[AUTH] sign out with google action'
);

// todos
export const todoFetchTodoListsRequestAction = createAction(
  '[TODO] fetch todo lists request action'
);

export const todoFetchTodoListsResponseAction = createAction(
  '[TODO] fetch todo lists response action',
  props<{ todoLists: ITodoList[] }>()
);

export const todoCreateTodoListRequestAction = createAction(
  '[TODO] create todo list request action',
  props<{ todoList: ITodoList; onSuccess: () => void }>()
);

export const todoCreateTodoListResponseAction = createAction(
  '[TODO] create todo list response action'
);
