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
  showTooltip: boolean;

  @HostBinding("class.open") get isOpen(): boolean {
    return this.opened;
  }

  constructor() {
    this.showTooltip = !Boolean(localStorage.getItem('filterClicked'));
    this.toggle.subscribe(() => {
      localStorage.setItem('filterClicked', 'true');
      this.showTooltip = false;
    });
  }

  ngOnInit(): void {
  }


}
