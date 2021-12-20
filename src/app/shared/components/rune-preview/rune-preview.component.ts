import {Component, Input, OnInit} from '@angular/core';
import {IRune} from "../../../services/runes/models/Runes";
import {RunesService} from "../../../services/runes/runes.service";

@Component({
  selector: 'app-rune-preview',
  templateUrl: './rune-preview.component.html',
  styleUrls: ['./rune-preview.component.scss']
})
export class RunePreviewComponent implements OnInit {
  @Input() rune: IRune;

  constructor(public rs: RunesService) {
  }

  public get index(): number {
    return this.rs.runes.indexOf(this.rune);
  }

  getShortName(i: number): string {
    let prefix, suffix;
    switch (Math.floor((i - 1) / 6)) {
      case 0:
        prefix = 'Ch';
        break;
      case 1:
        prefix = 'Fd';
        break;
      case 2:
        prefix = '';
        break;
      case 3:
        prefix = 'Fs';
        break;
      case 4:
        prefix = 'P';
        break;
    }
    switch ((i - 1) % 6) {
      case 0:
        suffix = 'Top';
        break;
      case 1:
        suffix = 'Am';
        break;
      case 2:
        suffix = 'Sap';
        break;
      case 3:
        suffix = 'Rub';
        break;
      case 4:
        suffix = 'Em';
        break;
      case 5:
        suffix = 'Dia';
        break;
    }
    return prefix + ' ' + suffix;
  }

  getFullName(i: number) {
    let prefix, suffix;
    switch (Math.floor(i / 6)) {
      case 0:
        prefix = 'Chipped';
        break;
      case 1:
        prefix = 'Flawed';
        break;
      case 2:
        prefix = '';
        break;
      case 3:
        prefix = 'Flawless';
        break;
      case 4:
        prefix = 'Perfect';
        break;
    }
    switch (Math.floor(i % 6)) {
      case 0:
        suffix = 'Topaz';
        break;
      case 1:
        suffix = 'Amethyst';
        break;
      case 2:
        suffix = 'Sapphire';
        break;
      case 3:
        suffix = 'Ruby';
        break;
      case 4:
        suffix = 'Emerald';
        break;
      case 5:
        suffix = 'Diamond';
        break;
    }
    return prefix + ' ' + suffix;
  }

  ngOnInit(): void {

  }

}
