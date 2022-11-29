import { Component, OnInit } from '@angular/core';
import {UserRequestService} from "../../services/user-request.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  requests$:any;
  constructor( private userRequestServ:UserRequestService ) { }

  ngOnInit(): void {
    this.userRequestServ.getAllRequests().subscribe(value => {
      this.requests$ = value
      console.log(this.requests$)
    })
  }

  removing(id: string) {
    this.userRequestServ.deleteRequest(id).subscribe(()=> {
      this.requests$ = this.requests$.filter(user => user.id !== id)
    })
  }
}
