import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Movie } from 'src/app/interfaces';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movieInfo : Movie | any = null;
  constructor(
    private route: ActivatedRoute,
    private moviesServ: MoviesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((result:Movie|any) => {
      this.getMovieDataById(result.id)
    })
  }

  getMovieDataById(id: string) {
    this.moviesServ.getMovieDetails(id).subscribe(result => {
      this.movieInfo = result
    })
  }
}
