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
import { HomeCreateTodoListModalComponent } from './home/create-todo-list-modal/home-create-todo-list-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeCreateTodoItemComponent } from './home/create-todo-item/home-create-todo-item.component';
import { HeaderComponent } from './header/header.component';
import { HomeTodoListComponent } from './home/todo-list/home-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeCreateTodoListModalComponent,
    HomeCreateTodoItemComponent,
    HomeTodoListComponent,
  ],
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
