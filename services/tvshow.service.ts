import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Shows } from '../models/Shows';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  

  showUrl = 'https://jsonplaceholder.typicode.com/todos'
  showlimit = '?_limit=6';

  constructor(private http:HttpClient) { }

  getShows():Observable<Shows[]>{
    return this.http.get<Shows[]>(`${this.showUrl}${this.showlimit}`);

  }

}
