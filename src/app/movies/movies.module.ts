import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { ContainerModule } from '../components/container/container.module';
import { MoviesService } from '../services/movies.service';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent],
  imports: [CommonModule, ContainerModule],
  exports: [MoviesComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
