import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {IRuneword, IRunewordUI} from "../../../services/runes/models/Runewords";
import {RunesService} from "../../../services/runes/runes.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-runeword-hover',
  templateUrl: './runeword-hover.component.html',
  styleUrls: ['./runeword-hover.component.scss'],
  animations: [
    trigger('rw', [
      transition(':enter', [
        style({opacity: 0}),
        animate('100ms ease-out', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class RunewordHoverComponent implements OnInit {
  @HostBinding("@rw")
  @HostBinding("style.transform") get transform() {
    const xOffset = this.rs.filterOpen ? "1100px, " : "850px, ";
    return 'translate(' + xOffset + (this.rs.hoveredRunewordPosition.y - 150) + 'px)';
  }

  constructor(public rs: RunesService) {
  }

  ngOnInit(): void {
  }

  public get word(): string {
    return this.rs.hoveredRuneword.word.split(' ').join('');
  }
}
