import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Trailer } from '../../interfaces';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnChanges {
  src: any;
  @Input() trailerKey: Trailer;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this?.trailerKey) {
      this.rightPathBySanitizerUrl();
    }
  }

  makeSanitizerUrl(path: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(path);
  }

  rightPathBySanitizerUrl() {
    this.src = this?.makeSanitizerUrl(
      `https://www.youtube-nocookie.com/embed/${this?.trailerKey}?autoplay=1&mute=1&start=4
        &modestbranding=1&controls=0&showinfo=0&loop=1`
    );
  }
}
