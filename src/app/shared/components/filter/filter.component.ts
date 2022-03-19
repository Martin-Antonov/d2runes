import {Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger, state} from "@angular/animations";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() opened: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  @HostBinding("class.open") get isOpen(): boolean {
    return this.opened;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
