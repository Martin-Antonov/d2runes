import {Component} from '@angular/core';
import {LkService} from "../../../services/lk/lk.service";

@Component({
  selector: 'app-lower-kurast',
  templateUrl: './lower-kurast.component.html',
  styleUrls: ['./lower-kurast.component.scss']
})
export class LowerKurastComponent {

  constructor(public lk: LkService) {
  }
}
