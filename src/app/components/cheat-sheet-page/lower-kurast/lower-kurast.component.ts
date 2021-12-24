import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lower-kurast',
  templateUrl: './lower-kurast.component.html',
  styleUrls: ['./lower-kurast.component.scss']
})
export class LowerKurastComponent implements OnInit {
  runes: Array<string> = ['', 'Pul', 'Um', 'Mal', 'Ist', 'Gul', 'Vex', 'Ohm', 'Lo', 'Sur', 'Ber'];
  tableInfo: Array<Array<string>> = [
    ['/p 1-2', '2', '1', '-', '1', '-', '-', '-', '1', '-', '-'],
    ['/p 3-4', '3', '4', '1', '2', '1', '-', '-', '1', '1', '1'],
    ['/p 5-6', '1', '1', '2', '1', '1', '-', '2', '-', '-', '-'],
    ['/p 7-8', '6', '1', '2', '2', '-', '1', '-', '-', '1', '1'],
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
