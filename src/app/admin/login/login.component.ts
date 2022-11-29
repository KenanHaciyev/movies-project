import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRequestService} from "../../services/user-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false

  constructor(
    private userRequestServ: UserRequestService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  myForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  submit() {
    if (this.myForm.invalid) {
      return
    }
    this.submitted = true
    const user = {
      email: this.myForm.value.email,
      password: this.myForm.value.password
    }
    this.userRequestServ.logIn(user).subscribe(value => {
        this.myForm.reset()
        this.router.navigate(['/admin', 'dashboard'])
        this.submitted = false
      }, () => {
        this.submitted = false
      }
    )
  }
}
