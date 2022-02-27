import {Injectable} from '@angular/core';
import {ALL_ITEMS, IItemGroup, ISpecificItem} from "./models/Items";
import {IUniquesFilterConfig} from "./models/IUniquesFilterConfig";
import {HERO_BUILDS, HeroBuild} from "../runes/models/Builds";

@Injectable({
  providedIn: 'root'
})
export class UniquesService {
  items: Array<IItemGroup>;
  filterConfig: IUniquesFilterConfig;
  hoveredItem: ISpecificItem;
  filterOpen: boolean = false;
  heroBuilds: Array<HeroBuild>;
  counter: number = 0;

  mousePosition: { x: number, y: number };

  constructor() {
    this.initItems();

    this.filterOpen = false;
    this.filterConfig = {
      search: "",
      itemTypes: [],
      itemSubtypes: [],
      qualities: [],
      stats: [],
      hero: null,
      build: null,
    }
    const filter = localStorage.getItem('uniques-filter');
    if (filter) {
      this.filterConfig = this.filterConfig = JSON.parse(filter);
      this.filter();
    }
  }

  private initItems() {
    this.items = ALL_ITEMS;
    this.items.forEach((iG) => {
      iG.selected = true;
      iG.items.forEach((i) => {
        i.selected = true;
      })
    })
    this.heroBuilds = HERO_BUILDS;
    this.heroBuilds.forEach((hb: HeroBuild) => {
      hb.builds.forEach((build) => {
        build.items.forEach((buildItem: string) => {
          let foundItem: ISpecificItem;
          for (let i = 0; i < this.items.length; i++) {
            const itemGroup = this.items[i];
            const potentialItem = itemGroup.items.find((itemExists) => {
              return itemExists.name.toLowerCase() === buildItem.toLowerCase()
            })
            if (potentialItem) {
              foundItem = potentialItem;
              break;
            }
          }
          foundItem.builds = foundItem.builds ?? [];
          foundItem.builds.push(hb.abbr + build.name);
        });
      });
    });
  }

  resetFilter() {
    this.filterConfig = {
      search: "",
      itemTypes: [],
      itemSubtypes: [],
      qualities: [],
      stats: [],
      hero: null,
      build: null,
    }
    localStorage.setItem("uniques-filter", null);
    this.filter();
  }

  filter(ev?: any) {
    const by = this.filterConfig;
    if (ev || ev === "") {
      by.search = ev;
    }
    this.counter = 0;
    localStorage.setItem('uniques-filter', JSON.stringify(by));
    this.items.forEach((iG: IItemGroup) => {
      iG.selected = true;
      iG.items.forEach((i: ISpecificItem) => {
        i.selected = true;
        this.counter++;
      });
    });

    this.items.forEach((iG: IItemGroup) => {
      if (this.checkItemTypeAndSubtypeInclusion(by, iG)) {
        iG.selected = false;
        this.counter -= iG.items.length;
      } else {
        iG.items.forEach((i: ISpecificItem) => {
          // Search
          if (by.search.length !== 0 && !i.name.toLowerCase().includes(by.search.toLowerCase()) && !i.type.toLowerCase().includes(by.search.toLowerCase())) {
            i.selected = false;
            this.counter--;
          }
          // Qualities
          if (by.qualities.length > 0 && !by.qualities.includes(i.quality)) {
            i.selected = false;
            this.counter--;
          }
          //heroes
          if (by.hero && !(i.stats.includes(by.hero + ' Only') || i.magicStats.includes(by.hero))) {
            i.selected = false;
            this.counter--;
          }
          // Stat
          if (by.stats.length > 0 && !this.checkItemStatsInclusion(by.stats, i.magicStats)) {
            i.selected = false;
            this.counter--;
          }
          // Build
          if (by.build && !this.checkBuildInclusion(by, i)) {
            i.selected = false;
            this.counter--;
          }
        });
      }
    });

    this.items.forEach((iG: IItemGroup) => {
      if (iG.selected) {
        const anySelected = iG.items.some((i) => {
          return i.selected;
        })
        if (!anySelected) {
          iG.selected = false;
        }
      }
    });
  }

  private checkItemTypeAndSubtypeInclusion(by: IUniquesFilterConfig, iG: IItemGroup): boolean {
    return by.itemTypes.length > 0 && !by.itemTypes.includes(iG.itemType) || (by.itemSubtypes.length > 0 && iG.itemSubtype && !by.itemSubtypes.includes(iG.itemSubtype))
  }

  private checkItemStatsInclusion(stats: Array<string>, itemStats: string) {
    const itemStatsToLower = itemStats.toLowerCase();
    for (let i = 0; i < stats.length; i++) {
      const currentStat = stats[i].toLowerCase();
      if (currentStat === "skill") {
        if (!itemStatsToLower.includes("skills") && !itemStatsToLower.includes("skill levels")) {
          return false;
        }
      }
      if (!itemStatsToLower.includes(currentStat)) {
        return false;
      }
    }

    return true;
  }

  private checkBuildInclusion(by: IUniquesFilterConfig, i: ISpecificItem) {
    return Boolean(by.build.items.find((build) => {
      return build.toLowerCase() === i.name.toLowerCase()
    }));
  }

  setHoveredItem(ev: any, item: ISpecificItem) {
    this.mousePosition = {x: ev.pageX, y: ev.pageY};
    this.hoveredItem = item;
  }

  removeHoveredItem() {
    // this.hoveredItem = null;
  }
}
