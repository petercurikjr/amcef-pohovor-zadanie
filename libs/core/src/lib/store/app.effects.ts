import { Injectable } from '@angular/core';
import { AppService } from '../services/app.service';
import * as actions from './app.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private appService: AppService) {}

  // auth
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

  // todos
  fetchTodoLists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.todoFetchTodoListsRequestAction),
      mergeMap(({ signedInUser }) =>
        this.appService
          .fetchTodoLists(signedInUser)
          .pipe(
            map((data) =>
              actions.todoFetchTodoListsResponseAction({ todoLists: data })
            )
          )
      )
    )
  );

  modifyTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.todoModifyTodoListRequestAction),
      mergeMap(({ todoList, onSuccess }) =>
        this.appService.modifyTodoList(todoList).pipe(
          map(() => {
            if (onSuccess) onSuccess();
            return actions.todoModifyTodoListResponseAction();
          })
        )
      )
    )
  );
}
