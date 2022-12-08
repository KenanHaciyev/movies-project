import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  movieId = Math.floor(Math.random() * 5)
  helpWithSearch :any= "Couldn't find any movie? Inform Us"
  message = '';
  orderBtn = false;
  time: string = new Date().toLocaleTimeString()

  constructor() {
  }

  ngOnInit(): void {
    this.typing()
    setInterval(() => {
      this.time = new Date().toLocaleTimeString()
    }, 1000)
  }

  typing() {
    let i = 0
    this.helpWithSearch = this.helpWithSearch.split('')
    const join = setInterval(() => {
      this.message += this.helpWithSearch[i]
      i++
      if (i === this.helpWithSearch.length) {
        clearInterval(join)
        this.orderBtn = true
      }
    }, 100)

  }


}
