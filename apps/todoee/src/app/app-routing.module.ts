import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home-component';
import { HomeCreateTodoItemComponent } from './home/create-todo-item/home-create-todo-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'home/create-todo-item', component: HomeCreateTodoItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
