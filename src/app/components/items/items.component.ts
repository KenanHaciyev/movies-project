import { Component, Input, OnInit } from '@angular/core';
import {Movie} from "../../interfaces"

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

@Input() moviesData:Movie[] = null!;
@Input() title: string = null!;
  constructor() { }

  ngOnInit(): void {
  }

}
