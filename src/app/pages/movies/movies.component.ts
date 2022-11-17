import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMovies: Movie[] = []
  constructor(
    private moviesServ: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMoviesByPages(1)
  }

  getMoviesByPages(page: number) {
    this.moviesServ.getDataByPage(page).subscribe((res:any) => {
      this.allMovies = res.results
    })
  }

  paginate(event: any) {
    this.getMoviesByPages(event.page + 1)
  }

}