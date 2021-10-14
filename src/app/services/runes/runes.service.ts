// Todo:
//  pd2
//  mobile
//  opacity
// heroes

import {Injectable} from '@angular/core';
import {IRune, RUNES_D2R, RUNES_PD2} from "./models/Runes";
import {IRunewordUI, RUNEWORDS_D2R, RUNEWORDS_PD2} from "./models/Runewords";
import {SortOrder, SortType} from "./models/Sorting";
import {IFilterConfig} from "./models/IFilter";

@Injectable({
  providedIn: 'root'
})
export class RunesService {
  private runesD2R: Array<IRune>;
  private runewordsD2R: Array<IRunewordUI>;
  private runesPD2: Array<IRune>;
  private runewordsPD2: Array<IRunewordUI>;

  filterConfig: IFilterConfig;
  hoveredRuneword: IRunewordUI;
  hoveredRunewordPosition: { x: number, y: number };
  filterOpen: boolean;

  private currentSortType: SortType;
  private currentSortOrder: SortOrder;

  constructor() {
    this.currentSortType = null;
    this.currentSortOrder = null;
    this.filterOpen = false;
    this.runesD2R = RUNES_D2R.slice();
    this.runewordsD2R = RUNEWORDS_D2R.slice();
    this.runewordsD2R.forEach((r: IRunewordUI) => {
      r.selected = true;
      r.sockets = r.word.split(" ").length;
    });

    this.runesPD2 = RUNES_PD2.slice();
    this.runewordsPD2 = RUNEWORDS_PD2.slice();
    this.runewordsPD2.forEach((r: IRunewordUI) => {
      r.selected = true;
      r.sockets = r.word.split(" ").length;
    });

    this.filterConfig = {
      sockets: [],
      itemTypes: [],
      runes: [],
      level: {from: 13, to: 69},
      stats: [],
      search: "",
      pd2ModeOn: false
    };
    const filter = localStorage.getItem('filter');
    if (filter) {
      this.filterConfig = JSON.parse(filter);
    }
  }

  public get runewords(): Array<IRunewordUI> {
    return this.filterConfig.pd2ModeOn ? this.runewordsPD2 : this.runewordsD2R;
  }

  public get runes(): Array<IRune> {
    return this.filterConfig.pd2ModeOn ? this.runesPD2 : this.runesD2R;
  }

  sortBy(type: SortType, order: SortOrder) {
    this.currentSortType = type;
    this.currentSortOrder = order;
    this.runewords.sort((a: IRunewordUI, b: IRunewordUI) => {
      // sort by selected
      if (a.selected && !b.selected) {
        return -1;
      } else if (b.selected && !a.selected) {
        return 1;
      } else {
        // then by rune selection, if present
        if (this.filterConfig.runes.length > 0) {
          const aRuneInclusionPercentage = this.calculateRuneInclusionPercentage(a);
          const bRuneInclusionPercentage = this.calculateRuneInclusionPercentage(b);
          if (aRuneInclusionPercentage < bRuneInclusionPercentage) {
            return 1;
          } else if (bRuneInclusionPercentage < aRuneInclusionPercentage) {
            return -1;
          }
        }
        // then by selected sort type
        const aProp = this.getSortPropDependingOnType(a, type);
        const bProp = this.getSortPropDependingOnType(b, type);
        const resultAsBoolean = order === SortOrder.ASCENDING ? aProp <= bProp : aProp > bProp;
        return resultAsBoolean ? 1 : -1;

      }
    });
  }

  private getSortPropDependingOnType(item: IRunewordUI, type: SortType) {
    if (type === SortType.NAME) {
      return item.name;
    } else if (type === SortType.TYPE) {
      return item.itemType;
    } else {
      return item.level;
    }
  }

  private calculateRuneInclusionPercentage(item: IRunewordUI): number {
    const words = item.word.split(" ");
    const includedRunes = words.filter((rune: string) => {
      return this.filterConfig.runes.includes(rune);
    });
    return Math.round(includedRunes.length / words.length * 100) / 100;
  }

  filter() {
    const by = this.filterConfig;
    localStorage.setItem('filter', JSON.stringify(by));
    this.runewords.forEach((r: IRunewordUI) => {
      r.selected = true;
    });

    this.runewords.forEach((r) => {
      // Search
      if (by.search.length !== 0 && !r.name.toLowerCase().includes(by.search.toLowerCase())) {
        r.selected = false;
      }
      // Sockets
      if (by.sockets.length > 0 && !by.sockets.includes(r.sockets)) {
        r.selected = false;
      }
      // WeaponTypes
      if (by.itemTypes.length > 0 && !this.checkWeaponTypeInclusion(by.itemTypes, r.itemType)) {
        r.selected = false;
      }
      // Runes
      if (by.runes.length > 0 && !this.checkRuneTypeInclusion(by.runes, r.word)) {
        r.selected = false;
      }
      // level
      if (r.level < by.level.from || r.level > by.level.to) {
        r.selected = false;
      }
      // Stat
      if (by.stats.length > 0 && !this.checkRuneStatInclusion(by.stats, r.stats)) {
        r.selected = false;
      }
    });

    this.sortBy(this.currentSortType, this.currentSortOrder);
  }

  private checkWeaponTypeInclusion(weaponTypes: Array<string>, runewordType: string) {
    const weaponTypesToLower = weaponTypes.map((type: string) => {
      return type.toLowerCase();
    });
    const runewordTypeToLower = runewordType.toLowerCase();
    for (let i = 0; i < weaponTypesToLower.length; i++) {
      if (runewordTypeToLower.includes(weaponTypesToLower[i])) {
        return true;
      }
    }
    return false;
  }


  private checkRuneTypeInclusion(selectedRunes: Array<string>, word: string) {
    let runesInRunewordToLower = word.split(' ').map((rune: string) => {
      return rune.toLowerCase();
    })
    const runesSet = new Set(runesInRunewordToLower);
    const selectedRunesToLower = selectedRunes.map((rune) => {
      return rune.toLowerCase();
    })

    selectedRunesToLower.push(...runesSet);
    return new Set(selectedRunesToLower).size !== selectedRunesToLower.length;
  }

  private checkRuneStatInclusion(selectedStats: Array<string>, runewordStats: Array<string>) {
    const runewordStatsToLower = runewordStats.join(", ").toLowerCase();
    for (let i = 0; i < selectedStats.length; i++) {
      const currentStat = selectedStats[i].toLowerCase();
      if (currentStat === "skill") {
        if (!runewordStatsToLower.includes("skills") && !runewordStatsToLower.includes("skill levels")) {
          return false;
        }
      }
      if (!runewordStatsToLower.includes(currentStat)) {
        return false;
      }
    }

    return true;
  }

  setRuneword(ev: any, runeword: IRunewordUI) {
    this.hoveredRunewordPosition = {x: ev.pageX, y: ev.pageY};
    this.hoveredRuneword = runeword;
  }

  deleteRuneword() {
    this.hoveredRuneword = null;
  }
}
