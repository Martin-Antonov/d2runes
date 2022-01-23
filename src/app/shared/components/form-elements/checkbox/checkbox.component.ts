import { Component, Input, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { RunesService } from 'src/app/services/runes/runes.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() public label: any;
  @Input() public name: string;
  @Input() public checked: boolean;
  @Input() public labelPosition: 'horizontal' | 'vertical' = 'horizontal'

  @Output() public checkboxChange: EventEmitter<any> = new EventEmitter;

  @HostBinding('style.flexDirection')
  public get direction(): string {
    return this.labelPosition === 'horizontal' ? 'row' : 'column';
  }

  ngOnInit(): void {
  }

}
