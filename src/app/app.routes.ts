import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { MoviesComponent } from './movies/movies.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './authguard.service';

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
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodosModule),
    component: TodoComponent,
    title: 'Todo',
  },
  {
    path: 'movies',
    component: MoviesComponent,
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
    data: { preload: true }, // Preload the module with selective preloading strategy
    title: 'Movies',
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    title: 'Protected',
    canActivate: [AuthGuard],
  },
];
