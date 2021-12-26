import {Component, HostBinding, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [trigger('host', [
    state('open', style({
      left: "0"
    })),
    state('closed', style({
      left: "-350px"
    })),
    transition('closed -> open', [
      animate('200ms ease-out', style({left: "0"})),
    ]),
    transition('open -> closed', [
      animate('200ms ease-in', style({left: '-350px'}))
    ]),
  ])]
})
export class IndexComponent implements OnInit {
  indexOpen: boolean = true;

  @HostBinding("@host") get state(): string {
    return this.indexOpen ? "open" : "closed";
  }

  constructor() {
  }

  ngOnInit(): void {
    if (window.innerWidth < 1440) {
      this.indexOpen = false;
    }
  }

  scroll(item: string) {
    document.getElementsByTagName(item)[0].scrollIntoView({behavior: "smooth"});
  }
}
