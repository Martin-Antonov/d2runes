import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {getItemMeta, getRuneMeta, getRunewordMeta, MetaConfig} from "./MetaConfig";
import {RUNEWORDS_D2R} from "../runes/models/Runewords";
import {ALL_ITEMS, IItemGroup, ISpecificItem} from "../uniques/models/Items";
import {RUNES_D2R} from "../runes/models/Runes";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs/operators";
import {IdleMonitorService, ScullyRoutesService} from "@scullyio/ng-lib";

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private ts: Title, private meta: Meta, private router: Router, private scully: ScullyRoutesService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((ev: RouterEvent) => {
      this.setTags(ev.url);
    });
    this.scully.getCurrent().subscribe((link) => {
      const url = link.route;
      this.setTags(url);
    });
    // this.getAllRoutes();

  }

  init() {
    this.ts.setTitle('D2Runes.io | Runewords Explorer & Filter | Diablo 2 Resurrected');
    this.meta.addTags(MetaConfig.DEFAULT)
  }

  setHome() {
    this.ts.setTitle('D2Runes.io | Runewords & Items Explorer FAQ | Diablo 2 Resurrected');
    MetaConfig.HOME.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setRunewords() {
    this.ts.setTitle('D2Runes.io | Runewords Explorer & Filter | Diablo 2 Resurrected');
    MetaConfig.DEFAULT.forEach((tag) => {
      this.meta.updateTag(tag);
    })
  }

  setRuneword(runeword: string) {
    // proper name
    const runewordObj = RUNEWORDS_D2R.find((item) => {
      return item.name.split(' ').join('').toLowerCase() === runeword;
    });
    this.ts.setTitle(`D2Runes.io | ${runewordObj.name} '${runewordObj.word}' Runeword | Diablo 2 Resurrected`)
    getRunewordMeta(runewordObj.name, runeword, runewordObj.word).forEach((tag) => {
      this.meta.updateTag(tag)
    });
  }

  setRunes() {
    this.ts.setTitle('D2Runes.io | Runes & Upgrade Recipes | Diablo 2 Resurrected');
    MetaConfig.RUNES.forEach((tag) => {
      this.meta.updateTag(tag);
    })
  }

  setRune(rune: string) {
    this.ts.setTitle(`D2Runes.io | ${rune} Rune | Diablo 2 Resurrected`)
    getRuneMeta(rune).forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setUniques() {
    this.ts.setTitle('D2Runes.io | Unique Items | Diablo 2 Resurrected');
    MetaConfig.UNIQUES.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setUnique(item: string) {
    let itemObj: ISpecificItem = null;
    let itemFullName = null;
    ALL_ITEMS.forEach((ig: IItemGroup) => {
      if (itemObj) {
        return;
      }
      itemObj = ig.items.find((i: ISpecificItem) => {
        itemFullName = i.name;
        return i.name.toLowerCase().split(' ').join('-').split('\'').join('') === item;
      })
    });
    const name = item.toLowerCase().split(' ').join('-').split('\'').join('');
    this.ts.setTitle(`D2Runes.io | ${itemFullName} | Diablo 2 Resurrected`);
    getItemMeta(itemFullName, name, itemObj.img).forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setFAQ() {
    this.ts.setTitle('D2Runes.io | Cheatsheet & FAQ | Diablo 2 Resurrected');
    MetaConfig.CHEATSHEET.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setSocketing() {
    this.ts.setTitle('D2Runes.io | Socketing Recipes | Diablo 2 Resurrected');
    MetaConfig.SOCKETING.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setRecipes() {
    this.ts.setTitle('D2Runes.io | Useful Recipes | Diablo 2 Resurrected');
    MetaConfig.RECIPES.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setLK() {
    this.ts.setTitle('D2Runes.io | Lower Kurast Farming | Diablo 2 Resurrected');
    MetaConfig.KURAST.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  setTables() {
    this.ts.setTitle('D2Runes.io | FCR FHR FBR Tables | Diablo 2 Resurrected');
    MetaConfig.TABLES.forEach((tag) => {
      this.meta.updateTag(tag);
    });
  }

  private setTags(url) {
    if (url === '/') {
      return;
    }

    if (url.endsWith('/home')) {
      this.setHome();
    } else if (url.endsWith('/runewords')) {
      this.setRunewords();
    } else if (url.endsWith('/runes')) {
      this.setRunes();
    } else if (url.endsWith('/uniques')) {
      this.setUniques();
    } else if (url.endsWith('/cheatsheet')) {
      this.setFAQ();
    } else if (url.endsWith('/socketing')) {
      this.setSocketing();
    } else if (url.endsWith('/useful-recipes')) {
      this.setRecipes();
    } else if (url.endsWith('/lk-farming')) {
      this.setLK();
    } else if (url.endsWith('/charts')) {
      this.setTables();
    } else if (url.includes('/runes/')) {
      const params = url.split('/');
      const last = params[params.length - 1];
      this.setRune(last);
    } else if (url.includes('/runewords/')) {
      const params = url.split('/');
      const last = params[params.length - 1];
      this.setRuneword(last);
    } else if (url.includes('/uniques/')) {
      const params = url.split('/');
      const last = params[params.length - 1];
      this.setUnique(last);
    } else {
      this.init();
    }
  }

  getAllRoutes() {
    const routes = [];
    RUNEWORDS_D2R.forEach((rw) => {
      routes.push(`/runewords/${rw.name.split(' ').join('').toLowerCase()}`)
    })
    RUNES_D2R.forEach((r) => {
      routes.push(`/runes/${r.key}`)
    })
    ALL_ITEMS.forEach((iG: IItemGroup) => {
      iG.items.forEach((i: ISpecificItem) => {
        routes.push(`/uniques/${i.name.toLowerCase().split(' ').join('-').split('\'').join('')}`)
      })
    })
    routes.push('/cheatsheet/socketing');
    routes.push('/cheatsheet/useful-recipes');
    routes.push('/cheatsheet/lk-farming');
    routes.push('/cheatsheet/charts');

    console.log(routes.toString());
  }
}
