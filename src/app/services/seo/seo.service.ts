import {Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {getItemMeta, getRuneMeta, getRunewordMeta, MetaConfig} from "./MetaConfig";
import {RUNEWORDS_D2R} from "../runes/models/Runewords";
import {ALL_ITEMS, IItemGroup, ISpecificItem} from "../uniques/models/Items";
import {RUNES_D2R} from "../runes/models/Runes";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private ts: Title, private meta: Meta) {
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
    const rwCapital = this.capitalizeFirstLetter(runeword)
    const runes = RUNEWORDS_D2R.find((item) => {
      return item.name === rwCapital;
    })?.word;
    this.ts.setTitle(`D2Runes.io | ${rwCapital} '${runes}' Runeword | Diablo 2 Resurrected`)
    getRunewordMeta(rwCapital.toLowerCase(), runes).forEach((tag) => {
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
    const runeCapital = this.capitalizeFirstLetter(rune)
    this.ts.setTitle(`D2Runes.io | ${runeCapital} Rune | Diablo 2 Resurrected`)
    getRuneMeta(runeCapital.toLowerCase()).forEach((tag) => {
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
    const itemCapital = this.capitalizeFirstLetter(item)
    let itemObj: ISpecificItem = null;
    ALL_ITEMS.forEach((ig: IItemGroup) => {
      if (itemObj) {
        return;
      }
      itemObj = ig.items.find((i: ISpecificItem) => {
        return i.name.toLowerCase() === item;
      })
    });
    const name = itemCapital.toLowerCase().split(' ').join('-').split('\'').join('');
    this.ts.setTitle(`D2Runes.io | ${itemCapital} | Diablo 2 Resurrected`)
    getItemMeta(name, itemObj.img).forEach((tag) => {
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

  private capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    routes.push('/cheatsheet/lk-framing');
    routes.push('/cheatsheet/charts');

    console.log(routes);
  }
}
