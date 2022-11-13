import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  movies: any = []

  constructor(
    private moviesServ: MoviesService
  ) { }

  ngOnInit(): void {
    this.moviesServ.getData().subscribe((res:any) => {
        this.movies = res.results
    })
  }
}
