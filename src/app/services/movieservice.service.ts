import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {Film} from '../models/film'
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  API_TOKEN :any= "182f38758a109acddc2cac4034171d31";

  films:Array<any> = [];
  filmSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllFilms(page: number) {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN + '&language=fr&page=' + page
    this.http.get<Array<Film>>(url).subscribe(films=>{
      this.films = films;
      this.emitFilmsSubject()
    })
  }

  getFilmFromServer() {
   

    return this.http.get<Array<Film>>(`https://api.themoviedb.org/3/trending/all/week?api_key=0697149ea65326dc3659c54195aace8a&language=en-US`).toPromise()
     .then((res: any)=>res).catch(err=>console.log(err))
     
   }
  emitFilmsSubject(){
    this.filmSubject.next(this.films)
  }

  getFilmById(id:any) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.API_TOKEN + '&language=fr';
    this.http.get<Array<Film>>(url).subscribe(films=>{
      this.films = films;
      this.emitFilmsSubject()
    })
  }
  getFilms(text: String, page: number) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    this.http.get<Array<Film>>(url).subscribe(films=>{
      this.films = films;
      this.emitFilmsSubject()
    })
  }

  getImage(name: String) {
    return 'https://image.tmdb.org/t/p/w300' + name;
  }


 
}
