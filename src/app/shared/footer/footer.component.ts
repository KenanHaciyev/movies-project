import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  loading: string = 'Loading';
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.loading === 'Loading......') {
        this.loading = 'Loading';
      }
      this.loading += '.';
    }, 300);
  }
}
