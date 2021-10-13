import {Component, OnInit} from '@angular/core';
import {detectAnyAdblocker} from 'just-detect-adblock'

@Component({
  selector: 'app-ads-container',
  templateUrl: './ads-container.component.html',
  styleUrls: ['./ads-container.component.scss']
})
export class AdsContainerComponent implements OnInit {
  checkPerformed: boolean = false;
  adsDisabled: boolean = true;

  constructor() {
  }

  async ngOnInit() {
    console.log("shown");
    const addBlock = await detectAnyAdblocker();
    this.adsDisabled = Boolean(addBlock);
    this.checkPerformed = true;
  }
}
