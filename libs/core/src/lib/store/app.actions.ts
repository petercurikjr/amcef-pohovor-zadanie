import { createAction, props } from '@ngrx/store';
import { User, UserCredential } from '@angular/fire/auth/firebase';

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
