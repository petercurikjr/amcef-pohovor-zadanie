import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';

@Injectable()
export class AppFacade {
  constructor(private store: Store<AppState>) {}
}
