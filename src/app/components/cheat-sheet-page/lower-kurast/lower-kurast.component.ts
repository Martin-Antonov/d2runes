import {Component, OnInit} from '@angular/core';
import {LkService} from "../../../services/lk/lk.service";

@Component({
  selector: 'app-lower-kurast',
  templateUrl: './lower-kurast.component.html',
  styleUrls: ['./lower-kurast.component.scss']
})
export class LowerKurastComponent implements OnInit {

  constructor(public lk: LkService) {
  }

  ngOnInit(): void {
  }

}
