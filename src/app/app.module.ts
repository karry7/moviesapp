import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmviewComponent } from './filmview/filmview.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieserviceService } from './services/movieservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomemovieComponent } from './homemovie/homemovie.component';
import { DetailsComponent } from './details/details.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FilmviewComponent,
    FilmItemComponent,
    HomemovieComponent,
    DetailsComponent,
    FavoritesComponent,
    AuthentificationComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MovieserviceService,HttpClient],
  exports: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
