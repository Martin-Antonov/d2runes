import {Component, HostBinding, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-runeword-page',
  templateUrl: './runewords-page.component.html',
  styleUrls: ['./runewords-page.component.scss'],
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
export class RunewordsPageComponent implements OnInit {
  constructor(public rs: RunesService) {
  }

  ngOnInit(): void {
  }
}
