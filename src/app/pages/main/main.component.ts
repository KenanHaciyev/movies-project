import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  popularMovies: any = []
  topRatedMovies: any = []
  upcomingMovies: any = []

  constructor(
    private moviesServ: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesServ.getData().subscribe((res:any) => {
        this.popularMovies = res.results
    })

    this.moviesServ.getData("top_rated").subscribe((res:any) => {
      this.topRatedMovies = res.results
    })

    this.moviesServ.getData("upcoming").subscribe((res:any) => {
      this.upcomingMovies = res.results
    })
  }


}
