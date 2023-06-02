import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UserCredential } from '@angular/fire/auth/firebase';
import * as actions from './app.actions';
import { AppEntity, ITodoList } from '../models/app.model';

export interface AppState extends EntityState<AppEntity> {
  googleSignedInUser?: UserCredential;
  todoLists?: ITodoList[];
}

export const appAdadpter: EntityAdapter<AppEntity> =
  createEntityAdapter<AppEntity>();
export const initialState: AppState = appAdadpter.getInitialState({});

export const appReducer = createReducer(
  initialState,

  // auth
  on(actions.authSignInWithGoogleResponseAction, (state, { user }) => ({
    ...state,
    googleSignedInUser: user,
  })),
  on(actions.authGoogleAuthStateChangedAction, (state, { user }) => ({
    ...state,
    googleSignedInUser: { ...state.googleSignedInUser, user: user },
  })),
  on(actions.authSignOutWithGoogleAction, (_) => ({
    ...initialState,
  })),

  // todos
  on(actions.todoFetchTodoListsResponseAction, (state, { todoLists }) => ({
    ...state,
    todoLists: todoLists,
  }))
);
