import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) {
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
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

  getMovieTrailer(id: string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f076dbbfaed7c390f748743c91303bf6`)
  }

}
