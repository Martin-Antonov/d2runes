import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public runes: RunesService) {
  }

  ngOnInit(): void {
  }

}
