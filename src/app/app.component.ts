/**
1. Refactor Runeword preview to be reusable.
 2. Add uniques filter https://www.youtube.com/watch?v=r8SClkQB5_k
 3. Add set items builder
 4. SSR - twitter cards, tutorial - https://fireship.io/lessons/angular-universal-firebase/
 5. instagram page
 6. FB page
 7. twitter page
 *     */
import {Component} from '@angular/core';
import {filter} from "rxjs/operators";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {RunesService} from "./services/runes/runes.service";
import {LkService} from "./services/lk/lk.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd2r-runes';

  constructor(private router: Router, private rs: RunesService, private lk: LkService) {
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
