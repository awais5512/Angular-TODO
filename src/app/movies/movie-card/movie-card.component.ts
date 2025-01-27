import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movie.types';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  containsNumber(title: string): boolean {
    return /\d/.test(title);
  }
}
