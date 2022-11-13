import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    return  this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=f076dbbfaed7c390f748743c91303bf6")
  }

}
