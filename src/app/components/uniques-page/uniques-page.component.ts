import {Component, OnInit} from '@angular/core';
import {ALL_ITEMS, ALL_UNIQUES} from "../../services/uniques/Items";

@Component({
  selector: 'app-uniques-page',
  templateUrl: './uniques-page.component.html',
  styleUrls: ['./uniques-page.component.scss']
})
export class UniquesPageComponent implements OnInit {
  items = ALL_ITEMS;

  constructor() {
    const allUniques = ALL_UNIQUES.split(', ').map((item) => {
      return item.toLowerCase()
    });
    console.log(allUniques.length);
    this.items.forEach((item) => {
      item.items.forEach((item2) => {
        if (!allUniques.includes(item2.name.toLowerCase())) {
          console.log(item2.name);
        }
      })
    })
  }

  ngOnInit(): void {
  }

}
