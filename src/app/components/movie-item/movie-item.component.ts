import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../interfaces";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() itemData : Movie = null!
  @Input() big:boolean = false
  constructor() {}

  ngOnInit(): void {
  }

}
