import {Component, OnInit} from '@angular/core';
import {UniquesService} from "../../../services/uniques/uniques.service";
import {Hero, ItemType, QualityType, SubType} from "../../../services/uniques/models/Items";
import {STAT_TYPES} from "../../../services/runes/models/StatTypes";

@Component({
  selector: 'app-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.scss']
})
export class FilterItemsComponent implements OnInit {
  qualitiesArr: Array<QualityType> = [QualityType.NONE, QualityType.NORMAL, QualityType.EXCEPTIONAL, QualityType.ELITE];
  typesArr: Array<ItemType> = [ItemType.CHARMS, ItemType.JEWELS, ItemType.AMULETS, ItemType.RINGS, ItemType.BELTS, ItemType.BOOTS, ItemType.GLOVES, ItemType.HELMS, ItemType.ARMORS, ItemType.SHIELDS, ItemType.WEAPONS,]
  weaponTypesArr: Array<SubType> = [SubType.AXE, SubType.BOW, SubType.CROSSBOW, SubType.DAGGER, SubType.MACE, SubType.POLEARM, SubType.SCEPTER, SubType.SPEAR, SubType.JAVELIN, SubType.STAFF, SubType.SWORD, SubType.THROW, SubType.KATAR, SubType.WAND,]
  heroesArr: Array<Hero> = [Hero.AMAZON, Hero.ASSASSIN, Hero.NECROMANCER, Hero.SORCERESS, Hero.BARBARIAN, Hero.DRUID, Hero.PALADIN]
  stats = STAT_TYPES;

  constructor(public us: UniquesService) {
  }

  ngOnInit(): void {
  }

  changeQuality(ev: any, quality: QualityType) {
    const checked = ev.currentTarget.checked;
    const qualities = this.us.filterConfig.qualities;
    if (checked && !qualities.includes(quality)) {
      qualities.push(quality);
    }
    if (!checked && this.us.filterConfig.qualities.includes(quality)) {
      qualities.splice(qualities.indexOf(quality), 1);
    }
    this.us.filter();
  }

  changeType(ev: any, type: ItemType) {
    const checked = ev.currentTarget.checked;
    const types = this.us.filterConfig.itemTypes;
    if (checked && !types.includes(type)) {
      types.push(type);
    }
    if (!checked && this.us.filterConfig.itemTypes.includes(type)) {
      types.splice(types.indexOf(type), 1);
    }
    this.us.filter();
  }

  changeWeaponType(ev: any, type: any) {
    const checked = ev.currentTarget.checked;
    const types = this.us.filterConfig.itemSubtypes;
    if (checked && !types.includes(type)) {
      types.push(type);
      if (!this.us.filterConfig.itemTypes.includes(ItemType.WEAPONS)) {
        this.us.filterConfig.itemTypes.push(ItemType.WEAPONS);
      }
    }
    if (!checked && this.us.filterConfig.itemSubtypes.includes(type)) {
      types.splice(types.indexOf(type), 1);
    }
    this.us.filter();
  }

  changeBuild(ev: any, build: { name: string; runewords: Array<string>; items: Array<string> }) {
    const checked = ev.currentTarget.checked;
    this.us.filterConfig.build = checked ? build : null;
    this.us.filter();
  }

  changeHero(ev: any, hero: Hero) {
    const checked = ev.currentTarget.checked;
    this.us.filterConfig.hero = checked ? hero : null;
    this.us.filter();
  }

  changeStat(ev, stat: string) {
    const checked = ev.currentTarget.checked;
    const stats = this.us.filterConfig.stats;
    if (checked && !stats.includes(stat)) {
      stats.push(stat);
    }
    if (!checked && stats.includes(stat)) {
      stats.splice(stats.indexOf(stat), 1);
    }

    this.us.filter();
  }
}
