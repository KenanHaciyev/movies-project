import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import {MovieInfoComponent} from "./pages/movie-info/movie-info.component";
import {FormComponent} from "./pages/form/form.component";
import {CartComponent} from "./pages/cart/cart.component";
import {ActorInfoComponent} from "./pages/actor-info/actor-info.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'movies', component: MoviesComponent},
  {path: 'movieInfo/:id', component: MovieInfoComponent},
  {path: 'movieInfo/:id/actorInfo/:actorId', component: ActorInfoComponent},
  {path: 'form', component: FormComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
