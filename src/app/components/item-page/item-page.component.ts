import {Component, OnInit} from '@angular/core';
import {filter} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";
import {IRunewordUI} from "../../services/runes/models/Runewords";
import {IRune} from "../../services/runes/models/Runes";
import {UniquesService} from "../../services/uniques/uniques.service";
import {IItemGroup, ISpecificItem} from "../../services/uniques/models/Items";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {
  currentItem: ISpecificItem;

  constructor(private router: Router, private us: UniquesService, private ts: Title) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((res: NavigationEnd) => {
        const urlSplit = res.urlAfterRedirects.split("/");
        const itemFromUrl = urlSplit[urlSplit.length - 1];

        let realItem: ISpecificItem = null;
        this.us.items.find((iG: IItemGroup) => {
          iG.items.forEach((i: ISpecificItem) => {
            const itemToString = i.name.toLowerCase().split(' ').join('-').split('\'').join('');
            if (itemFromUrl === itemToString) {
              realItem = i;
            }
          });
        });
        if (realItem) {
          this.ts.setTitle('Diablo II Resurrected Runeword Explorer | Items | ' + realItem.name);
          this.currentItem = realItem;
        }
      });
  }

  ngOnInit(): void {
  }

}
