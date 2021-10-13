import {Component, Input, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {IRunewordUI} from "../../services/runes/models/Runewords";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-runewords-table',
  templateUrl: './runewords-table.component.html',
  styleUrls: ['./runewords-table.component.scss'],
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
export class RunewordsTableComponent implements OnInit {

  @Input() runewords: Array<IRunewordUI>;

  constructor(public rs: RunesService) {
  }

  ngOnInit(): void {
  }

}
