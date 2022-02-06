import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {RunesService} from "../../../services/runes/runes.service";
import {PREVIEW_ANIMATION} from "../../../shared/Animations";

@Component({
  selector: 'app-runeword-hover',
  templateUrl: './runeword-hover.component.html',
  styleUrls: ['./runeword-hover.component.scss'],
  animations: PREVIEW_ANIMATION('rw')
})
export class RunewordHoverComponent implements OnInit {
  @HostBinding("@rw")
  @HostBinding("style.transform") get transform() {
    return 'translate(' + (this.rs.mousePosition.x + 50) + 'px, ' + (this.rs.mousePosition.y - 150) + 'px)';
  }

  constructor(public rs: RunesService) {
  }

  ngOnInit(): void {
  }

  public get word(): string {
    return this.rs.hoveredRuneword.word.split(' ').join('');
  }
}
