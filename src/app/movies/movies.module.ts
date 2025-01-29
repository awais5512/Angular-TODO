import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { ContainerModule } from '../components/container/container.module';
import { MoviesService } from '../services/movies.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ContainsNumberPipe } from '../pipes/contains-number.pipe';

@NgModule({
  declarations: [MoviesComponent, MovieCardComponent],
  imports: [CommonModule, ContainerModule, ContainsNumberPipe],
  exports: [MoviesComponent],
  providers: [MoviesService],
})
export class MoviesModule {}
