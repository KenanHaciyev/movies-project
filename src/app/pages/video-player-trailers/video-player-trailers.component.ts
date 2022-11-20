import {Component, Input, OnInit} from '@angular/core';
import {Trailer} from "../../interfaces";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-video-player-trailers',
  templateUrl: './video-player-trailers.component.html',
  styleUrls: ['./video-player-trailers.component.scss']
})
export class VideoPlayerTrailersComponent implements OnInit {
  src: any = ''
  @Input() trailerKey: Trailer;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.src = this.makeSanitizerUrl(
      `https://www.youtube-nocookie.com/embed/${this.trailerKey}?autoplay=1&start=0`
    )
  }

  makeSanitizerUrl(path: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(path)
  }
}
