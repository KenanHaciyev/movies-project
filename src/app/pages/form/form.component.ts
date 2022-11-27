import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MoviesService} from "../../services/movies.service";
import {UserRequestService} from "../../services/user-request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  submitted: boolean = false
  imageInfo: any;
  path: string;
  gratitude: boolean = false;
  loading: string = 'Loading';

  constructor(
    private moviesServ: MoviesService,
    private userServ: UserRequestService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.moviesServ.getData().subscribe((res: any) => {
      this.imageInfo = res.results
      this.path = this.imageInfo[Math.floor(Math.random() * 18 + 1)]?.poster_path
    })
  }

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    text: new FormControl('', Validators.required)
  })

  submit() {
    this.submitted = true
    this.gratitude = true
    this.loader()
    const user = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      text: this.myForm.value.text
    }

    this.userServ.sendRequest(user).subscribe(res => {
      this.myForm.reset()
      setTimeout(() => {
        this.router.navigate(['/'])
      }, 3000)
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }

  loader() {
    let i = 0
    const timer = setInterval(() => {
      this.loading += '.'
      i++
      if (this.loading === 'Loading....') {
        this.loading = 'Loading'
      }

      if (i === 6) {
        clearInterval(timer)
        this.gratitude = false
      }
    }, 500)
  }
}
