import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import {MovieInfoComponent} from "./pages/movie-info/movie-info.component";
import {FormComponent} from "./pages/form/form.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movieInfo/:id', component: MovieInfoComponent},
  {path: 'form', component: FormComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
