import {Component, HostBinding, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {IRunewordUI} from "../../services/runes/models/Runewords";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [trigger('table', [
    state('open', style({
      transform: "translateX(-20%)"
    })),
    state('closed', style({
      transform: "translateX(-50%)"
    })),
    transition('closed -> open', [
      animate('100ms 50ms ease-out', style({transform: "translateX(-20%)"})),
    ]),
    transition('open -> closed', [
      animate('100ms 50ms ease-in', style({transform: "translateX(-50%)"}))
    ]),
  ])]
})
export class HomeComponent implements OnInit {
  constructor(public rs: RunesService) {
  }

  ngOnInit(): void {
  }
}
