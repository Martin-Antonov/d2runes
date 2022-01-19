import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() public values: Array<string>;
  @Input() public index: number = 0;

  @Output() onValueChange: EventEmitter<any> = new EventEmitter;

  public toggle(increment: number): void {
    this.index = (this.index + increment + this.values.length) % this.values.length;
    this.onValueChange.emit(this.index);
  }
}
