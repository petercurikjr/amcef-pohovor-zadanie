import { createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

const appState = createFeatureSelector<AppState>('appReducer');
