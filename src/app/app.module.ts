import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PromoComponent } from './components/promo/promo.component';
import { ItemsComponent } from './components/items/items.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { VideoPlayerTrailersComponent } from './pages/video-player-trailers/video-player-trailers.component';
import { SearchPipe } from './shared/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/form/form.component';
import { CartComponent } from './pages/cart/cart.component';
import { ActorInfoComponent } from './pages/actor-info/actor-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MoviesComponent,
    PromoComponent,
    ItemsComponent,
    MovieItemComponent,
    MovieInfoComponent,
    VideoPlayerComponent,
    VideoPlayerTrailersComponent,
    SearchPipe,
    FormComponent,
    CartComponent,
    ActorInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
