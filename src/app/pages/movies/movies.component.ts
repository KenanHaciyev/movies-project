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
    this.moviesServ.getDataByPage(3).subscribe((res:any) => {
      this.allMovies = res.results
    })
  }

}
