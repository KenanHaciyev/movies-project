import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesCart:any[]=[]
  constructor(
    private http: HttpClient
  ) {
    if (this.moviesCart.length===0) {
      localStorage.clear()
    }
  }

  getMoviesBySearch(searchRes:string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?page=1&query=${searchRes}&api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  deleteFromCart(movie:Movie ) {
    this.moviesCart = this.moviesCart.filter(movieInfo => movieInfo.id !== movie.id)
    if (this.moviesCart.length===0) {
      localStorage.clear()
    }
  }

  addToCart(movie:Movie) {
    this.moviesCart.push(movie)
    return this.moviesCart
  }

  getReviews(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getMovieActors(id: string){
    return  this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getSimilarMovies(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getImages(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getData(type: string = 'popular') {
    return this.http.get(`https://api.themoviedb.org/3/movie/${type}?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getDataByPage(page: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getMovieDetails(id: string) {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getMovieTrailer(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }
}
