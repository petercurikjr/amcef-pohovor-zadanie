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
      mergeMap(() =>
        this.appService
          .fetchTodoLists()
          .pipe(
            map((data) =>
              actions.todoFetchTodoListsResponseAction({ todoLists: data })
            )
          )
      )
    )
  );

  createTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.todoCreateTodoListRequestAction),
      mergeMap(({ todoList, onSuccess }) =>
        this.appService.createTodoList(todoList).pipe(
          map(() => {
            if (onSuccess) onSuccess();
            return actions.todoCreateTodoListResponseAction();
          })
        )
      )
    )
  );

  addTodoItemToParentList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.todoAddTodoItemToParentListRequestAction),
      mergeMap(({ parentList, onSuccess }) =>
        this.appService.addTodoItemToParentList(parentList).pipe(
          map(() => {
            if (onSuccess) onSuccess();
            return actions.todoAddTodoItemToParentListResponseAction();
          })
        )
      )
    )
  );
}
