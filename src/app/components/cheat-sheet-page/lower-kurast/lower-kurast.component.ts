import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lower-kurast',
  templateUrl: './lower-kurast.component.html',
  styleUrls: ['./lower-kurast.component.scss']
})
export class LowerKurastComponent implements OnInit {
  runes: Array<string> = ['', 'Pul', 'Um', 'Mal', 'Ist', 'Gul', 'Vex', 'Ohm', 'Lo', 'Sur', 'Ber'];
  tableInfo: Array<Array<string>> = [
    ['/p 1-2', '1', '1', '1', '-', '-', '-', '1', '-', '1', '1'],
    ['/p 3-4', '5', '4', '7', '1', '4', '1', '1', '3', '1', '1'],
    ['/p 5-6', '7', '8', '6', '3', '2', '6', '2', '4', '6', '2'],
    ['/p 7-8', '19', '13', '18', '8', '12', '6', '5', '3', '10', '5'],
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
