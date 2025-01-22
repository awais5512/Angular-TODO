import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../types/movie.types';
import { NgFor, NgIf } from '@angular/common';
import { ContainerComponent } from '../components/container/container.component';

@Component({
  selector: 'app-movies',
  imports: [NgFor, NgIf, ContainerComponent, ContainerComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  isLoading = true;
  skeletons = Array(5);

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getMoviesList().subscribe({
      next: (data: any) => {
        this.movies = data?.Search;
      },
      error: (err) => {
        console.error('Error fetching movies:', err);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
