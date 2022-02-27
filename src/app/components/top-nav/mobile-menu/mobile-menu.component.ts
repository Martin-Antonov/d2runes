import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [
    trigger('bg', [
      transition(':enter', [
        style({opacity: 0}),
        animate('100ms ease-out', style({opacity: 1})),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('100ms', style({opacity: 0}))
      ])
    ]),
    trigger('menu', [
      transition(':enter', [
        style({left: "-320px"}),
        animate('100ms ease-out', style({left: '0'})),
      ]),
      transition(':leave', [
        style({left: 0}),
        animate('100ms', style({left: '-320px'}))
      ])
    ])
  ]
})
export class MobileMenuComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  closeClick() {
    this.close.emit();
  }

}
