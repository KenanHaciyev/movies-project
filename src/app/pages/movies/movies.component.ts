import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnChanges {
  pageForBack: number;
  allMovies: Movie[] = []
  searchResult: string;
  constructor(
    private moviesServ: MoviesService
  ) {}

  ngOnChanges(changes:SimpleChanges): void {
    console.log('changes' , changes)
  }

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
    this.pageForBack = event.page + 1
  }
}
