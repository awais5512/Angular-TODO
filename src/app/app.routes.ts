import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'todo',
    pathMatch: 'full',
    component: TodoComponent,
    title: 'Todo'
  }
];
