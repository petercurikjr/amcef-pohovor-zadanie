import { Injectable } from '@angular/core';
import { AppService } from '../services/app.service';
import * as actions from './app.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, take } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private appService: AppService) {}

  signInWithGoogle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.authSignInWithGoogleRequestAction),
      mergeMap(() =>
        this.appService.signInWithGoogle().pipe(
          map((user) =>
            actions.authSignInWithGoogleResponseAction({
              user: Object.freeze(user),
            })
          )
        )
      )
    )
  );

  signOutWithGoogle$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.authSignOutWithGoogleAction),
        map(() => this.appService.signOutWithGoogle())
      ),
    { dispatch: false }
  );
}
