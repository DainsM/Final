import { Component, OnInit } from '@angular/core';
import { Movies } from "../../models/Movies";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movies[];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(movies =>{
      this.movies = movies
    });
  }

}
