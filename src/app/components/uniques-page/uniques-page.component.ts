import {Component, OnInit} from '@angular/core';
import {ALL_ITEMS} from "../../services/uniques/Items";
import {UniquesService} from "../../services/uniques/uniques.service";

@Component({
  selector: 'app-uniques-page',
  templateUrl: './uniques-page.component.html',
  styleUrls: ['./uniques-page.component.scss']
})
export class UniquesPageComponent implements OnInit {
  items = ALL_ITEMS;

  constructor(public us: UniquesService) {
  }

  ngOnInit(): void {
  }

}
