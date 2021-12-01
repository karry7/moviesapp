import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
favouritemovies:Film[];
  constructor(private movieservice:MovieserviceService) { }

  ngOnInit(): void {
    }
  }

