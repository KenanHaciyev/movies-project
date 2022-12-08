import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  itemsData:any
  firstPartOfPath: string = 'https://image.tmdb.org/t/p/w342'
  constructor(private moviesServ: MoviesService) { }

  ngOnInit(): void {
    this.itemsData = this.moviesServ.moviesCart
  }

  removeFromCart(itemData: Movie) {
    this.moviesServ.deleteFromCart(itemData)
    localStorage.removeItem(`${itemData.id}`)
    this.itemsData = this.moviesServ.moviesCart
  }
}
