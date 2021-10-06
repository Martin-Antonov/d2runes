import {Component, OnInit} from '@angular/core';
import {RunesService} from "../../services/runes/runes.service";
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  searchBoxVisible: boolean;
  searchIconVisible: boolean;

  constructor(public rs: RunesService, private router: Router) {
    this.searchIconVisible = false;
    this.searchBoxVisible = false;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((res: NavigationEnd) => {
        this.searchIconVisible = res.urlAfterRedirects.includes('runewords');
      });
  }
}
