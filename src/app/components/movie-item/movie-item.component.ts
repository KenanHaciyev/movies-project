import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces';
import { ViewportScroller } from '@angular/common';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  firstPartOfPath: string = 'https://image.tmdb.org/t/p/w342';
  @Input() itemData: Movie;
  @Input() big: boolean = false;
  added: string | null;
  constructor(private viewPortScroller: ViewportScroller, private moviesServ: MoviesService) {}

  ngOnInit(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
    this.added = localStorage.getItem(`${this.itemData.id}`);
  }

  addToCart(movieData: Movie) {
    this.moviesServ.addToCart(movieData);
    localStorage.setItem(`${this.itemData.id}`, `${true}`);
    this.added = localStorage.getItem(`${this.itemData.id}`);
  }

  deleteFromCart(movieData: Movie) {
    this.moviesServ.deleteFromCart(movieData);
    localStorage.removeItem(`${this.itemData.id}`);
    this.added = localStorage.getItem(`${this.itemData.id}`);
  }
}
