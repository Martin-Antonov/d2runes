import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {Title} from "@angular/platform-browser";
import {IRunewordUI} from "../../services/runes/models/Runewords";
import {IRune} from "../../services/runes/models/Runes";
import {filter} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-rune-page',
  templateUrl: './rune-page.component.html',
  styleUrls: ['./rune-page.component.scss']
})
export class RunePageComponent implements OnInit {
  currentRune: IRune;
  runewords: Array<IRunewordUI> = [];

  constructor(public rs: RunesService, private ts: Title, private router: Router) {
    rs.filterOpen = false;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((res: NavigationEnd) => {

        const urlSplit = res.urlAfterRedirects.split("/");
        const rune = urlSplit[urlSplit.length - 1];
        if (rune === "runes") {
          this.currentRune = null;
          this.runewords = [];
          this.ts.setTitle('Diablo II Resurrected Runeword Explorer | Runes');
        } else {
          const realRune = this.rs.runes.find((r: IRune) => {
            return r.key.toLowerCase() === rune.toLowerCase();
          });

          if (realRune) {
            this.ts.setTitle('Diablo II Resurrected Runeword Explorer | Runes | ' + realRune.key);
            this.setCurrentRune(realRune);
          }
        }
      });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  setCurrentRune(rune: IRune) {
    this.currentRune = rune;
    this.runewords = this.rs.runewords.filter((r: IRunewordUI) => {
      return r.word.includes(rune.key);
    });
  }
}
