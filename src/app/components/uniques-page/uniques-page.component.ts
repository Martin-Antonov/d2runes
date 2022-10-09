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

  get left(): string {
    let posX = this.us.mousePosition.x;
    const isMirrored = posX > window.innerWidth * 0.6;
    const increment = isMirrored ? -100 : 50
    return (posX + increment) + 'px';
  }

  get top(): string {
    let posY = this.us.mousePosition.y - 150;
    return posY + 'px';
  }

  get transform(): string {
    let posX = this.us.mousePosition.x;
    const isMirrored = posX > window.innerWidth * 0.6;
    return 'translate(' + (isMirrored ? '-100%' : '0') + ', 0)';
  }


  constructor(public us: UniquesService) {
  }

  ngOnInit(): void {
  }

  public get animationCondition(): string {
    return this.us.filterOpen && window.innerWidth > 1600 ? 'open' : 'closed'
  }
}
