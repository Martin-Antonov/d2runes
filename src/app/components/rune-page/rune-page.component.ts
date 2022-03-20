import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {Title} from "@angular/platform-browser";
import {IRunewordUI} from "../../services/runes/models/Runewords";
import {IRune} from "../../services/runes/models/Runes";
import {filter} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: 'app-rune-page',
  templateUrl: './rune-page.component.html',
  styleUrls: ['./rune-page.component.scss']
})
export class RunePageComponent implements OnInit {
  currentRune: IRune;
  runewords: Array<IRunewordUI> = [];

  constructor(public rs: RunesService, private router: Router, private seo: SeoService) {
    rs.filterOpen = false;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((res: NavigationEnd) => {

        const urlSplit = res.urlAfterRedirects.split("/");
        const rune = urlSplit[urlSplit.length - 1];
        if (rune === "runes") {
          this.currentRune = null;
          this.runewords = [];
          this.seo.setRunes();
        } else {
          const realRune = this.rs.runes.find((r: IRune) => {
            return r.key.toLowerCase() === rune.toLowerCase();
          });

          if (realRune) {
            this.seo.setRune(realRune.key.toLowerCase());
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
