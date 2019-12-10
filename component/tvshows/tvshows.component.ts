import { Component, OnInit } from '@angular/core';
import { Shows } from "../../models/Shows";
import { ShowService } from "../../services/tvshow.service";

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TVshowsComponent implements OnInit {

  shows:Shows[];

  constructor(private showService:ShowService) { }

  ngOnInit() {
    this.showService.getShows().subscribe(shows =>{
      this.shows = shows
    });
    
  }

}
