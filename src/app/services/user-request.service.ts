import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {

  constructor(private http: HttpClient) {
  }

  sendRequest(user: any) {
    return this.http.post(`${environment.pathForSendRequest}/requests.json`, user)
  }

}
