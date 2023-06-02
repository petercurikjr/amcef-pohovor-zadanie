import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UserCredential } from '@angular/fire/auth/firebase';
import * as actions from './app.actions';
import { AppEntity } from '../models/app.model';

export interface AppState extends EntityState<AppEntity> {
  googleSignedInUser?: UserCredential;
}

export const appAdadpter: EntityAdapter<AppEntity> =
  createEntityAdapter<AppEntity>();
export const initialState: AppState = appAdadpter.getInitialState({});

export const appReducer = createReducer(
  initialState,
  on(actions.authSignInWithGoogleResponseAction, (state, { user }) => ({
    ...state,
    googleSignedInUser: user,
  })),
  on(actions.authGoogleAuthStateChangedAction, (state, { user }) => ({
    ...state,
    googleSignedInUser: { ...state.googleSignedInUser, user: user },
  })),
  on(actions.authSignOutWithGoogleAction, (state) => ({
    ...state,
    googleSignedInUser: undefined,
  }))
);
