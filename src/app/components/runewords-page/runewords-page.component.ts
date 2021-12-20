import {Component, HostBinding, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {Title} from "@angular/platform-browser";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-runeword-page',
  templateUrl: './runewords-page.component.html',
  styleUrls: ['./runewords-page.component.scss'], animations: [
    trigger('r', [
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
export class RunewordsPageComponent implements OnInit {
   get runeHoverTransform() {
    return 'translate(' + (this.rs.mousePosition.x + 50) + 'px, ' + (this.rs.mousePosition.y - 150) + 'px)';
  }

  constructor(public rs: RunesService, private ts: Title) {
    this.ts.setTitle('Diablo 2 Resurrected Runeword Explorer | Runewords');
  }

  ngOnInit(): void {
  }
}
