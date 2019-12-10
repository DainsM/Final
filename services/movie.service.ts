import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movies } from '../models/Movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  
   //'https://api.themoviedb.org/3/movie/now_playing?api_key=beb735ef8cff05c79e5ec5e73c4bebcb&language=en-US';
  //'https://jsonplaceholder.typicode.com/todos';
  //'https://ghibliapi.herokuapp.com/films';

  movieUrl = 'https://ghibliapi.herokuapp.com/films';
  movielimit = '?_limit=10';

  constructor(private http:HttpClient) { }

  getMovies():Observable<Movies[]>{
    return this.http.get<Movies[]>(`${this.movieUrl}${this.movielimit}`);

  }

}
