import {Component, OnInit} from '@angular/core';
import {ALL_ITEMS} from "../../services/uniques/models/Items";
import {UniquesService} from "../../services/uniques/uniques.service";
import {TABLE_ANIMATION} from "../../shared/Animations";

@Component({
  selector: 'app-uniques-page',
  templateUrl: './uniques-page.component.html',
  styleUrls: ['./uniques-page.component.scss'],
  animations: TABLE_ANIMATION
})
export class UniquesPageComponent implements OnInit {
  items = ALL_ITEMS;

  get runeHoverTransform() {
    return 'translate(' + (this.us.mousePosition.x + 50) + 'px, ' + (this.us.mousePosition.y - 150) + 'px)';
  }

  constructor(public us: UniquesService) {
  }

  ngOnInit(): void {
  }

  public get animationCondition(): string {
    return this.us.filterOpen && window.innerWidth > 1600 ? 'open' : 'closed'
  }
}
