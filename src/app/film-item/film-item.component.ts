import { Component, OnInit,Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Film} from '../models/film';
import {MovieserviceService } from '../services/movieservice.service';
@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
@Input() film! : Film;
movieservice: MovieserviceService;
  constructor(private movieService : MovieserviceService, private activatedRoute : ActivatedRoute,
    private  router : Router) { 
    this.movieservice=movieService;
  }

  ngOnInit(): void {
  }

  opendetails(id: string): any {
    return this.router.navigate(['/details/' + id]);
  }
  }
