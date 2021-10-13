import {Component, HostBinding, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-runeword-page',
  templateUrl: './runewords-page.component.html',
  styleUrls: ['./runewords-page.component.scss'],
})
export class RunewordsPageComponent implements OnInit {
  constructor(public rs: RunesService, private ts: Title) {
    this.ts.setTitle('Diablo 2 Resurrected Runeword Explorer | Runewords');
  }

  ngOnInit(): void {
  }
}
