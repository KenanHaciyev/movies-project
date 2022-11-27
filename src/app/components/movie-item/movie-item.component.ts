import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../interfaces";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  firstPartOfPath: string = 'https://image.tmdb.org/t/p/w342'
  @Input() itemData: Movie;
  @Input() big: boolean = false

  constructor(private viewPortScroller: ViewportScroller) {
  }

  ngOnInit(): void {
    this.viewPortScroller.scrollToPosition([0, 0])
  }

}
