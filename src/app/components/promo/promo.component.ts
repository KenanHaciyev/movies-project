import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  movieId = Math.floor(Math.random() * 5)
  helpWithSearch=['C','a','n','t', ' ', 'f','i','n','d',' ', 'a','n','y',' ', 'm','o','v','i','e','?',' ','I','n','f','o','r','m',' ','u','s']
  message='';
  orderBtn=false;
  constructor() { }

  ngOnInit(): void {
    this.typing()
  }

  typing(){
    let i=0
    const join = setInterval(() => {
      this.message+=this.helpWithSearch[i]
      i++
      if(i===this.helpWithSearch.length){
        clearInterval(join)
        this.orderBtn=true
      }
    },100)

  }





}
