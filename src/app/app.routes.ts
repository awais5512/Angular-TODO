import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'todo',
    pathMatch: 'full',
    component: TodoComponent,
    title: 'Todo',
  },
  {
    path: 'movies',
    component: MoviesComponent,
    title: 'Movies',
  },
];
