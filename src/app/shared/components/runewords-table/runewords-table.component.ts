import {Component, Input, OnInit} from '@angular/core';
import {RunesService} from "../../../services/runes/runes.service";
import {IRunewordUI} from "../../../services/runes/models/Runewords";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {TABLE_ANIMATION} from "../../Animations";

@Component({
  selector: 'app-runewords-table',
  templateUrl: './runewords-table.component.html',
  styleUrls: ['./runewords-table.component.scss'],
  animations: TABLE_ANIMATION
})
export class RunewordsTableComponent implements OnInit {
  @Input() runewords: Array<IRunewordUI>;

  constructor(public rs: RunesService) {
  }

  public get animationCondition(): string {
    return this.rs.filterOpen && window.innerWidth > 1600 ? 'open' : 'closed'
  }

  ngOnInit(): void {
  }

}
