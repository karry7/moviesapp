import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-homemovie',
  templateUrl: './homemovie.component.html',
  styleUrls: ['./homemovie.component.scss']
})
export class HomemovieComponent implements OnInit {
  films: Array<Film> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
