import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor(private http: HttpClient) {
  }

  sendRequest(user: any) {
    return this.http.post(`${environment.pathForRequest}/requests.json`, user)
  }

  logIn(user: Object) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
  }

  getAllRequests() {
    return this.http.get(`${environment.pathForRequest}/requests.json`)
      .pipe(
        map(value => {
          return Object.keys(value)
            .map(key => {
              return {
                info: value[key],
                id: key
              }
            })
        })
      )
  }

  deleteRequest(id: any) {
   return  this.http.delete(`${environment.pathForRequest}/requests/${id}.json`)
  }
}
