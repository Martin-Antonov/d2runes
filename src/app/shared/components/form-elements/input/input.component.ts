import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() public value: string;

  @Output() public valueChange: EventEmitter<any> = new EventEmitter;

  public onInput(ev: any): void {
    this.value = ev.target.value;
    this.valueChange.emit(this.value);
  }
}
