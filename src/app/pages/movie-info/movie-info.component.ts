import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Movie} from 'src/app/interfaces';
import {MoviesService} from "../../services/movies.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {
  movieInfo: Movie;
  movieTrailers: any;
  bySound: boolean = false;
  firstPartOfPath: string = 'https://image.tmdb.org/t/p/';
  imagesArr: any;
  similarMovies: any;
  movieInfoProductionCompaniesLength = 0;
  movieReviews:any[];
  reviews=false;
  movieReviewsLength:number;
  actorsArr:any;

  constructor(
    private route: ActivatedRoute,
    private moviesServ: MoviesService,
    private viewportScroller: ViewportScroller,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((result: any) => {
      this.getMovieDataById(result.id)
      this.moviesServ.getMovieTrailer(result.id).subscribe((res: any) => {
        this.movieTrailers = res.results[0]
      })
      this.getImagesOfMovie(result.id)
      this.getSimilarMovies(result.id)
      this.getMovieReviews(result.id)
      this.getActors(result.id)
    })
  }

  toTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
    this.bySound = true
  }

  toTopOnly() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


  getMovieDataById(id: string) {
    return this.moviesServ.getMovieDetails(id).subscribe((result: any) => {
      this.movieInfo = result
      this.movieInfoProductionCompaniesLength = result.production_companies.length;
    })
  }

  getImagesOfMovie(id: string) {
    this.moviesServ.getImages(id).subscribe((result: any) => {
      this.imagesArr = result.backdrops.slice(0, 5);
    })
  }

  getSimilarMovies(id: string) {
    this.moviesServ.getSimilarMovies(id).subscribe((result: any) => {
      this.similarMovies = result.results.slice(0, 7)
    })
  }

  getMovieReviews(id: string) {
    this.moviesServ.getReviews(id).subscribe((res:any)=> {
      this.movieReviews = res.results;
      this.movieReviewsLength = res.results?.length
    })
  }

  getActors(id: string){
     this.moviesServ.getMovieActors(id).subscribe((res:any) => {
       this.actorsArr = res.cast.slice(0,8)
     })
  }
}
