import {Component, HostBinding, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {Title} from "@angular/platform-browser";
import {animate, style, transition, trigger} from "@angular/animations";
import {PREVIEW_ANIMATION} from "../../shared/Animations";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: 'app-runeword-page',
  templateUrl: './runewords-page.component.html',
  styleUrls: ['./runewords-page.component.scss'],
  animations: PREVIEW_ANIMATION('r')
})
export class RunewordsPageComponent implements OnInit {
  get runeHoverTransform() {
    return 'translate(' + (this.rs.mousePosition.x + 50) + 'px, ' + (this.rs.mousePosition.y - 150) + 'px)';
  }

  constructor(public rs: RunesService, private seo: SeoService) {
    this.seo.setRunewords()
  }

  ngOnInit(): void {
  }
}
