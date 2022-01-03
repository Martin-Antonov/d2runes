import {Component, OnInit} from '@angular/core';
import {ALL_ITEMS} from "../../services/uniques/Items";

@Component({
  selector: 'app-uniques-page',
  templateUrl: './uniques-page.component.html',
  styleUrls: ['./uniques-page.component.scss']
})
export class UniquesPageComponent implements OnInit {
  items = ALL_ITEMS;

  constructor() {
    let sum = 0;
    this.items.forEach((item) => {
      sum += item.items.length;
    })
    console.log(sum);
  }

  ngOnInit(): void {
  }

}
