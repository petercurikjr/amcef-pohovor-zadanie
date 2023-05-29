import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './app.reducer';
import { AppEffects } from './app.effects';
import { AppFacade } from './app.facade';

@NgModule({
  imports: [
    // store
    StoreModule.forRoot({}),
    StoreModule.forFeature('appReducer', appReducer),

    // effects
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AppEffects]),

    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [AppFacade],
})
export class NgrxModule {}
