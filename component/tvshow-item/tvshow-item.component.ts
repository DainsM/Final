import { Component, OnInit, Input } from '@angular/core';
import { Shows } from 'src/app/models/Shows';

@Component({
  selector: 'app-tvshow-item',
  templateUrl: './tvshow-item.component.html',
  styleUrls: ['./tvshow-item.component.css']
})
export class TvshowItemComponent implements OnInit {

  @Input() show: Shows;

  constructor() { }

  ngOnInit() {
  }

}
