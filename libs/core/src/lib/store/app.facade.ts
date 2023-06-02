import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app.reducer';
import * as selectors from './app.selectors';
import * as actions from './app.actions';
import { User } from '@angular/fire/auth';

@Injectable()
export class AppFacade {
  getSignedInUser$ = this.store.pipe(select(selectors.selectSignedInUser));

  constructor(private store: Store<AppState>) {}

  signInWithGoogle() {
    this.store.dispatch(actions.authSignInWithGoogleRequestAction());
  }

  updateGoogleSignedInUser(user: User) {
    this.store.dispatch(actions.authGoogleAuthStateChangedAction({ user }));
  }

  signOutWithGoogle() {
    this.store.dispatch(actions.authSignOutWithGoogleAction());
  }
}
