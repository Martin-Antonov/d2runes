/**
 * 1. Rune preview refactor and to include recipes
 * 2. Refactor runeword preview to be reusable.
 * 3. Cheatsheet page
 *     a. adding sockets article
 *     b. mapping article
 *     c. Add next rune recipes*/
import {Component} from '@angular/core';
import {filter} from "rxjs/operators";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {RunesService} from "./services/runes/runes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd2r-runes';

  constructor(private router: Router, private rs: RunesService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((res: NavigationEnd) => {
        this.rs.deleteRuneword();
        this.rs.deleteRune();
      });
    window.onresize = () => {
      this.resizeForLargeScreens();
    }

    this.resizeForLargeScreens();
  }

  resizeForLargeScreens() {
    const ratio = window.outerWidth / 1920;
    if (ratio > 1) {
      document.body.style.zoom = ratio.toString();
    } else {
      document.body.style.zoom = '';
    }
  }
}
