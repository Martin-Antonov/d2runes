import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {IRuneword, IRunewordUI} from "../../../services/runes/models/Runewords";
import {RunesService} from "../../../services/runes/runes.service";

@Component({
  selector: 'app-runeword-hover',
  templateUrl: './runeword-hover.component.html',
  styleUrls: ['./runeword-hover.component.scss']
})
export class RunewordHoverComponent implements OnInit {

  @HostBinding("style.transform") get transform() {
    return 'translate(850px, ' + (this.runes.hoveredRunewordPosition.y - 150) + 'px)';
  }

  constructor(public runes: RunesService) {
  }

  ngOnInit(): void {
  }

  public get word(): string {
    return this.runes.hoveredRuneword.word.split(' ').join('');
  }
}
