import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayerTrailersComponent } from './video-player-trailers.component';

describe('VideoPlayerTrailersComponent', () => {
  let component: VideoPlayerTrailersComponent;
  let fixture: ComponentFixture<VideoPlayerTrailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPlayerTrailersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPlayerTrailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
