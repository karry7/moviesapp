
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import {  Router } from '@angular/router';
import { Film } from '../models/film';
import { MovieserviceService } from '../services/movieservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  filmId:string="";
  film:Film ;
  routeSub: Subscription=new Subscription();
httpService:MovieserviceService;

   films : Array<Film>=[];

   
   
   public page : number=1

  constructor(
    private activatedRoute: ActivatedRoute,
    httpService: MovieserviceService,
    private  router : Router
  ) { 
    this.httpService=httpService;
  }

  ngOnInit(): void {
    
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.filmId = params['id'];
    
       this.getAll()
      
     
  
    })

   
  }


  getAll(){
    this.httpService.getFilmFromServer().then((data:any)=>{  
        

      
      this.films=data.results
      for(let i=0 ; i<this.films.length ; i ++  ){
       this.httpService.getImage(this.films[i].poster_path)
       
       
      }

    
        console.log(this.films)

     

       
      
     }).then(()=> {
       this.getFilmDetails(this.filmId)
       alert("done")
       
        // this.httpService.getFilms(this.film.title,1).then((data)=>( console.log(data)))
    })
     
    
  }


  
  getFilmDetails(id: string){
    // this.film = this.films.find(film => film.id === id);
    for( let i =0 ; i<=this.films.length;i++){
         if(this.films[i].id==id){
             this.film=this.films[i]
             

         }
    }

    
   
    
  }

  openFilmDetails(id: string): any {
    return this.router.navigate(['/details/' + id]);
  }



  
  }

