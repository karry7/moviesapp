import { Component, OnInit,Input } from '@angular/core';
import { MOVIES } from '../moviesmock';
import{Film} from '../models/film';
import {MovieserviceService } from '../services/movieservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filmview',
  templateUrl: './filmview.component.html',
  styleUrls: ['./filmview.component.scss']
})
export class FilmviewComponent implements OnInit {
films : Array<Film>=[];
moviename:string='';
page:number=1;
movieservice:MovieserviceService;
filmsSubscription : Subscription;

  constructor(private movieService : MovieserviceService) {
    this.movieservice=movieService;
    this.movieservice.getAllFilms(this.page)
    this.filmsSubscription = this.movieservice.filmSubject.subscribe(response=>{
      this.films = response["results"];
      
    })
  
  }

   /**searchfilm(){
    this.movieService.getFilms(this.moviename,this.page)
  }**/
  ngOnInit(): void {
  
  }
}