import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbyComponent } from './hobby/hobby.component';
import { NegociosComponent } from './negocios/negocios.component';
import { TourComponent } from './tour/tour.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "hobby", component: HobbyComponent},
  {path: "negocios", component: NegociosComponent},
  {path: "tour", component: TourComponent},
  {path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
