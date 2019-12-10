import { Component, OnInit, Input } from '@angular/core';
import { Movies } from 'src/app/models/Movies';
import { Shows } from 'src/app/models/Shows';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() movie: Movies;
  @Input() show: Shows;

  constructor() { }

  ngOnInit() {
  }

  

}
