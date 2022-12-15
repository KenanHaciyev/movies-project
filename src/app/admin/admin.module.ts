import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPageComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'dashboard', component: DashboardComponent },
        ],
      },
    ]),
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class AdminModule {}
