import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  searchResult: string;
  constructor(private moviesServ: MoviesService) {}

  ngOnInit(): void {
    this.getMoviesByPages(1);
  }

  getMoviesByPages(page: number) {
    this.moviesServ.getDataByPage(page).subscribe((res: any) => {
      this.allMovies = res.results;
    });
  }

  paginate(page: number) {
    if (this.searchResult) {
      localStorage.removeItem('page');
      localStorage.setItem('page', `${page + 1}`);
      this.onSearching();
    } else {
      this.getMoviesByPages(page + 1);
      localStorage.removeItem('page');
      localStorage.setItem('page', `${page + 1}`);
    }
    localStorage.removeItem('page');
  }

  onSearching() {
    if (this.searchResult) {
      this.moviesServ
        .getMoviesBySearch(this.searchResult, +localStorage.getItem('page')! || 1)
        .subscribe((res: any) => {
          this.allMovies = res.results;
        });
    } else {
      this.getMoviesByPages(+`${localStorage.getItem('page')}` || 1);
    }
  }
}
