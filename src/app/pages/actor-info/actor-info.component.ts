import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { ActorInfo } from '../../interfaces';

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.scss'],
})
export class ActorInfoComponent implements OnInit {
  actorId: string;
  movieId: string;
  actorInfo: ActorInfo;
  actorNames: string[];
  constructor(private route: ActivatedRoute, private moviesServ: MoviesService) {}

  ngOnInit(): void {
    this.actorId = this.route.snapshot.params['actorId'];
    this.movieId = this.route.snapshot.params['id'];
    this.moviesServ.getActorInfo(this.actorId).subscribe((data: ActorInfo) => {
      this.actorInfo = data;
      this.actorNames = data.also_known_as!.slice(0, 8);
    });
  }
}
