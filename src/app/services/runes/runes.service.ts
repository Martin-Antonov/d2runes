// Todo: lower case, skills vs skill damage, bottom hover not working properly.
import {Injectable} from '@angular/core';
import {IRune, RUNES} from "./models/Runes";
import {IRunewordUI, RUNEWORDS} from "./models/Runewords";
import {SortOrder, SortType} from "./models/Sorting";
import {IFilterConfig} from "./models/IFilter";

@Injectable({
  providedIn: 'root'
})
export class RunesService {
  runes: Array<IRune>;
  runewords: Array<IRunewordUI>
  filterConfig: IFilterConfig;
  hoveredRuneword: IRunewordUI;
  hoveredRunewordPosition: { x: number, y: number };

  private currentSortType: SortType;
  private currentSortOrder: SortOrder;

  constructor() {
    this.currentSortType = null;
    this.currentSortOrder = null;
    this.runes = RUNES.slice();
    this.runewords = RUNEWORDS.slice();
    this.runewords.forEach((r: IRunewordUI) => {
      r.selected = true;
      r.sockets = r.word.split(" ").length;
    });

    this.filterConfig = {sockets: [], itemTypes: [], runes: [], level: {from: 13, to: 69}, stats: []};
  }

  sortBy(type: SortType, order: SortOrder) {
    this.currentSortType = type;
    this.currentSortOrder = order;
    this.runewords.sort((a: IRunewordUI, b: IRunewordUI) => {
      if (a.selected && !b.selected) {
        return -1;
      } else if (b.selected && !a.selected) {
        return 1;
      } else {
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

  filter() {
    const by = this.filterConfig;
    this.runewords.forEach((r: IRunewordUI) => {
      r.selected = true;
    });

    this.runewords.forEach((r) => {
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
    for (let i = 0; i < weaponTypes.length; i++) {
      if (runewordType.includes(weaponTypes[i])) {
        return true;
      }
    }
    return false;
  }


  private checkRuneTypeInclusion(selectedRunes: Array<string>, word: string) {
    const runesInRuneword = word.split(' ');
    for (let i = 0; i < runesInRuneword.length; i++) {
      const currentRune = runesInRuneword[i];
      if (!selectedRunes.includes(currentRune)) {
        return false;
      }
    }

    return true;
  }

  private checkRuneStatInclusion(selectedStats: Array<string>, runewordStats: Array<string>) {
    const runewordStatsJoined = runewordStats.join("");
    for (let i = 0; i < selectedStats.length; i++) {
      const currentStat = selectedStats[i];
      if (!runewordStatsJoined.includes(currentStat)) {
        return false;
      }
    }

    return true;
  }

  setRuneword(ev: any, runeword: IRunewordUI) {
    this.hoveredRunewordPosition = {x: ev.pageX, y: ev.pageY};
    this.hoveredRuneword = runeword;
    console.log(ev);
  }

  deleteRuneword() {
    this.hoveredRuneword = null;
  }
}
