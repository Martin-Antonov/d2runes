import {Injectable} from '@angular/core';
import {IRune, RUNES_D2R, RUNES_PD2} from "./models/Runes";
import {IRunewordUI, RUNEWORDS_D2R, RUNEWORDS_PD2} from "./models/Runewords";
import {SortOrder, SortType} from "./models/Sorting";
import {IFilterConfig} from "./models/IFilter";
import {HERO_BUILDS, HeroBuild} from "./models/Builds";

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
  mousePosition: { x: number, y: number };
  hoveredRune: IRune;
  filterOpen: boolean;
  heroBuilds: Array<HeroBuild>;

  private currentSortType: SortType;
  private currentSortOrder: SortOrder;

  constructor() {
    this.currentSortType = null;
    this.currentSortOrder = null;
    this.filterOpen = false;
    this.initRunes();

    this.filterConfig = {
      sockets: [],
      itemTypes: [],
      runes: [],
      level: {from: 13, to: 69},
      stats: [],
      search: "",
      pd2ModeOn: false,
      build: null
    };
    const filter = localStorage.getItem('filter');
    if (filter) {
      this.filterConfig = JSON.parse(filter);
      this.filter();
    }

    let visited = Boolean(localStorage.getItem('visited'));
    console.log('visited: ' + visited)
    if (!visited) {
      localStorage.clear();
      localStorage.setItem('visited', 'true');
    }
  }

  private initRunes() {
    this.runesD2R = RUNES_D2R.slice();
    this.runewordsD2R = RUNEWORDS_D2R.slice();
    this.runewordsD2R.forEach((r: IRunewordUI) => {
      r.selected = true;
      r.sockets = r.word.split(" ").length;
      r.builds = [];
    });

    this.heroBuilds = HERO_BUILDS;
    this.heroBuilds.forEach((hero) => {
      hero.builds.forEach((build) => {
        build.runewords.forEach((rw: string) => {
          const runeword = this.runewordsD2R.find((r) => {
            return r.name.toLowerCase().includes(rw.toLowerCase());
          });
          runeword.builds.push(hero.abbr + build.name);
        })
      })
    });

    this.runesPD2 = RUNES_PD2.slice();
    this.runewordsPD2 = RUNEWORDS_PD2.slice();
    this.runewordsPD2.forEach((r: IRunewordUI) => {
      r.selected = true;
      r.sockets = r.word.split(" ").length;
    });
  }

  resetFilter() {
    this.filterConfig = {
      sockets: [],
      itemTypes: [],
      runes: [],
      level: {from: 13, to: 69},
      stats: [],
      search: "",
      pd2ModeOn: false,
      build: null
    };
    localStorage.clear();
    this.filter();
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
      // Build
      if (by.build && !by.build.runewords.join('').toLowerCase().includes(r.name.split(' (L)').join('').toLowerCase())) {
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
    this.mousePosition = {x: ev.pageX, y: ev.pageY};
    this.hoveredRuneword = runeword;
  }

  deleteRuneword() {
    this.hoveredRuneword = null;
  }

  setRune(ev: any, rune: string) {
    this.mousePosition = {x: ev.pageX, y: ev.pageY};
    this.hoveredRune = this.runes.find((r) => {
      return r.key.toLowerCase() === rune.toLowerCase();
    });
  }

  deleteRune() {
    this.hoveredRune = null;
  }
}
