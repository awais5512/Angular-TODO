import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './types/movie.types';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly apiUrl =
    'https://www.omdbapi.com/?apikey=e8b1763b&s=terminator';
  private http = inject(HttpClient);

  getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
