import {Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger, state} from "@angular/animations";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [trigger('host', [
    state('open', style({
      left: window.innerWidth > 780 ? "10px" : "0"
    })),
    state('closed', style({
      left: window.innerWidth > 780 ? "-690px" : "-100%"
    })),
    transition('closed -> open', [
      animate('200ms ease-out', style({left: window.innerWidth > 780 ? "10px" : "0"})),
    ]),
    transition('open -> closed', [
      animate('200ms ease-in', style({left: window.innerWidth > 780 ? "-690px" : "-100%"}))
    ]),
  ])]
})
export class FilterComponent implements OnInit {
  @Input() opened: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  @HostBinding("@host") get state(): string {
    return this.opened ? "open" : "closed";
  }

  constructor(private host: ElementRef) {
    window.addEventListener('resize', () => {
      if (this.opened) {
        this.host.nativeElement.style.left = window.innerWidth > 780 ? '10px' : 0;
      } else {
        this.host.nativeElement.style.left = window.innerWidth > 780 ? '-690px' : '-100%';
      }
    });
  }

  ngOnInit(): void {
  }

}
