import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {LkService} from "../../../services/lk/lk.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-lower-kurast',
  templateUrl: './lower-kurast.component.html',
  styleUrls: ['./lower-kurast.component.scss']
})
export class LowerKurastComponent {
  isBrowser: boolean;

  constructor(public lk: LkService, @Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
    console.log(this.isBrowser);
  }
}
