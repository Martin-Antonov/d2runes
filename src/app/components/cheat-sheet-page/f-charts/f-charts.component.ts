import { Component, OnInit } from '@angular/core';
import {tables} from "../../../services/runes/models/tables";

@Component({
  selector: 'app-f-charts',
  templateUrl: './f-charts.component.html',
  styleUrls: ['./f-charts.component.scss']
})
export class FChartsComponent implements OnInit {
  tables = tables;
  constructor() { }

  ngOnInit(): void {
  }

}
