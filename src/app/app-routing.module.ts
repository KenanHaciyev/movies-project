import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MoviesComponent} from "./pages/movies/movies.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'movies', component: MoviesComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
