import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() public label: any;
  @Input() public name: string;
  @Input() public checked: boolean;
  @Input() public labelPosition: 'horizontal' | 'vertical' = 'horizontal';

  @Output() public checkboxChange: EventEmitter<any> = new EventEmitter;

  @HostBinding('style.flexDirection')
  public get direction(): string {
    return this.labelPosition === 'horizontal' ? 'row' : 'column';
  }
}
