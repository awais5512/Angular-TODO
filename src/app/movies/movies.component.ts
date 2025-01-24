import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../types/movie.types';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ContainerComponent } from '../components/container/container.component';

@Component({
  selector: 'app-movies',
  imports: [NgFor, NgIf, NgClass, ContainerComponent, ContainerComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  isLoading = true;
  skeletons = Array(5);

  constructor(private moviesService: MoviesService) {}

  containsNumber(title: string): boolean {
    return /\d/.test(title);
  }

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
