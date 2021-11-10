import {Component, Input, OnInit} from '@angular/core';
import {IRune} from "../../../services/runes/models/Runes";
import {RunesService} from "../../../services/runes/runes.service";

@Component({
  selector: 'app-rune-preview',
  templateUrl: './rune-preview.component.html',
  styleUrls: ['./rune-preview.component.scss']
})
export class RunePreviewComponent implements OnInit {
  @Input() rune: IRune;

  constructor(public rs: RunesService) {

  }

  ngOnInit(): void {
  }

}
