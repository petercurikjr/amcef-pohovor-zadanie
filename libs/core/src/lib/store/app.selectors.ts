import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

const appState = createFeatureSelector<AppState>('appReducer');

export const selectSignedInUser = createSelector(
  appState,
  (state) => state?.googleSignedInUser
);
