import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  constructor(public rs: RunesService) {
  }

  ngOnInit(): void {
  }
}
