import {Injectable} from '@angular/core';
import {IItemGroup, ISpecificItem} from "./models/Items";
import {IUniquesFilterConfig} from "./models/IUniquesFilterConfig";
import {HeroBuild} from "../runes/models/Builds";

@Injectable({
  providedIn: 'root'
})
export class UniquesService {
  items: Array<IItemGroup>;
  filterConfig: IUniquesFilterConfig;
  hoveredItem: ISpecificItem;
  filterOpen: boolean = false;
  heroBuilds: Array<HeroBuild>

  constructor() {
  }
}
