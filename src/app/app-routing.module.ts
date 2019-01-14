import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Added RouterModule, Routes too.
import { RouterModule, Routes } from '@angular/router';
// Add Routes:
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Add a URL like ~/detail/11
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  // Will redirect to this starting point at the application;
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Add a URL like ~/detail/11
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  // Added exports array:
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
