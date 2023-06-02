import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home-component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule, NgrxModule } from '@todoee/core';
import { UiModule } from '@todoee/ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeCreateTodolistModalComponent } from './home/create-todolist-modal/home-create-todolist-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent, HomeCreateTodolistModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgrxModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
