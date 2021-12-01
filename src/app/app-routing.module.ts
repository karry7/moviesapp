import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemovieComponent } from './homemovie/homemovie.component'
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  { path: '', component: HomemovieComponent },
 
  {path:'movies/:id',component: DetailsComponent},
  //{path:'favoris',component:FavoritesComponent},

//  {path:'signup', component: AuthentificationComponent},
  
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }