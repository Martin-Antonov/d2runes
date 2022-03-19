/**
 * DONE! Set items upgrades
 * DONE! description on the other side if it does not fit.
 * DONE! Cheatsheet belt acceptable armor type for upping
 * DONE! NONE for no quality on single pages
 * CANT REPR! Firefox bug scrolling through filter options does not go to the end
 * DONE! Total number of uniques
 * Add a cube icon perhaps next to runes recipes so that they are more easily visible.
 * DONE! "you character" typo in the caster amulet section
 *  DONE! life leech vs life leach (leech is correct)
 *  DONE! add mana and gold find leech to filter
 *  DONE! Mobile view on kurast article and hamburger menu.
 *  DONE! Pressing back leaves the scroll (always scroll to top on runewords/uniques pages)
 * DONE! Tooltip should not be hidden under the last item that was hovered.

 * All hell zones immunity filter
 * Add filters graphic
 * Upgraded stats on normal/exceptional uniques
 * Best bases for RW
 * Skill planner
 * sets/set items
 * Where are items most easily found.
 * Grail tracker
 * Add all kinds of skills to the skills checkbox.
 1. Add set items builder
 2. SSR - twitter cards, tutorial - https://fireship.io/lessons/angular-universal-firebase/
 3. instagram page
 4. FB page
 5. twitter page
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
      //@ts-ignore
      document.body.style.zoom = ratio.toString();
    } else {
      //@ts-ignore
      document.body.style.zoom = '';
    }
  }
}
