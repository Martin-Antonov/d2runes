import {Component, OnInit} from '@angular/core';
import {filter} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";
import {IRunewordUI} from "../../services/runes/models/Runewords";
import {Title} from "@angular/platform-browser";
import {RunesService} from "../../services/runes/runes.service";
import {IRune} from "../../services/runes/models/Runes";

@Component({
  selector: 'app-runeword-single-page',
  templateUrl: './runeword-single-page.component.html',
  styleUrls: ['./runeword-single-page.component.scss']
})
export class RunewordSinglePageComponent implements OnInit {
  currentRuneword: IRunewordUI;
  runes: Array<IRune>;

  constructor(private router: Router, private ts: Title, private rs: RunesService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((res: NavigationEnd) => {
        const urlSplit = res.urlAfterRedirects.split("/");
        const rune = urlSplit[urlSplit.length - 1];

        const realRune = this.rs.runewords.find((r: IRunewordUI) => {
          return r.name.toLowerCase().split(' ').join('').includes(rune);
        });
        if (realRune) {
          this.ts.setTitle('Diablo II Resurrected Runeword Explorer | Runes | ' + realRune.name);
          this.currentRuneword = realRune;
          const runes = this.currentRuneword.word.split(' ');
          this.runes = runes.map((r) => {
            return this.rs.runes.find((ru: IRune) => {
              return ru.key === r;
            });
          })
        }
      });
  }

  ngOnInit(): void {
  }

}
