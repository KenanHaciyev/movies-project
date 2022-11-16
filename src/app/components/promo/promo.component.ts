import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  movieId = Math.floor(Math.random() * 5)
  constructor() { }

  ngOnInit(): void {
  }


}
