import {Component, HostBinding, OnInit} from '@angular/core';
import {RunesService} from "../../../services/runes/runes.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-rune-hover',
  templateUrl: './rune-hover.component.html',
  styleUrls: ['./rune-hover.component.scss'],
  animations: [
    trigger('r', [
      transition(':enter', [
        style({opacity: 0}),
        animate('100ms ease-out', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('100ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class RuneHoverComponent implements OnInit {

  @HostBinding("@r")
  @HostBinding("style.transform") get transform() {
    return 'translate(' + (this.rs.mousePosition.x + 50) + 'px, ' + (this.rs.mousePosition.y - 150) + 'px)';
  }

  constructor(public rs: RunesService) {
  }

  ngOnInit(): void {
  }

}
