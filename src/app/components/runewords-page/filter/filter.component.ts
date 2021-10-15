import {Component, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';
import {RunesService} from "../../../services/runes/runes.service";
import {Options} from "@angular-slider/ngx-slider";
import {ARMOR_TYPES, MAGIC_WEAPONS, MELEE_WEAPONS, MISSILE_WEAPONS} from "../../../services/runes/models/WeaponTypes";
import {STAT_TYPES} from "../../../services/runes/models/StatTypes";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [trigger('host', [
    state('open', style({
      left: window.innerWidth > 780 ? "10px" : "0"
    })),
    state('closed', style({
      left: window.innerWidth > 780 ? "-690px" : "-100%"
    })),
    transition('closed -> open', [
      animate('200ms ease-out', style({left: window.innerWidth > 780 ? "10px" : "0"})),
    ]),
    transition('open -> closed', [
      animate('200ms ease-in', style({left: window.innerWidth > 780 ? "-690px" : "-100%"}))
    ]),
  ])]
})
export class FilterComponent implements OnInit {
  @HostBinding("@host") get state(): string {
    return this.rs.filterOpen ? "open" : "closed";
  }

  options: Options = {
    floor: 13, ceil: 69, rightToLeft: false
  }
  meleeWeapons: Array<string>;
  magicWeapons: Array<string>;
  missileWeapons: Array<string>;
  armorTypes: Array<string>;
  sockets: Array<number>;
  stats: Array<{ name: string, searchKey: string }>;

  constructor(public rs: RunesService, private host: ElementRef) {
    this.meleeWeapons = MELEE_WEAPONS;
    this.magicWeapons = MAGIC_WEAPONS;
    this.missileWeapons = MISSILE_WEAPONS;
    this.armorTypes = ARMOR_TYPES;
    this.sockets = [2, 3, 4, 5, 6];
    this.stats = STAT_TYPES;

    window.addEventListener('resize', () => {
      if (this.rs.filterOpen) {
        this.host.nativeElement.style.left = window.innerWidth > 780 ? '10px' : 0;
      } else {
        this.host.nativeElement.style.left = window.innerWidth > 780 ? '-690px' : '-100%';
      }
    });
  }

  ngOnInit(): void {
  }

  changeSockets(ev, socket: number) {
    const checked = ev.currentTarget.checked;
    const sockets = this.rs.filterConfig.sockets;
    if (checked && !sockets.includes(socket)) {
      sockets.push(socket);
    }
    if (!checked && this.rs.filterConfig.sockets.includes(socket)) {
      sockets.splice(sockets.indexOf(socket), 1);
    }

    this.rs.filter();
  }

  isRuneSelected(key: string) {
    return this.rs.filterConfig.runes.includes(key);
  }

  changeRune(key: string) {
    const runes = this.rs.filterConfig.runes;
    if (runes.includes(key)) {
      runes.splice(runes.indexOf(key), 1);
    } else {
      runes.push(key);
    }

    this.rs.filter();
  }

  changeItem(ev, item: string) {
    const checked = ev.currentTarget.checked;
    const items = this.rs.filterConfig.itemTypes;
    if (checked && !items.includes(item)) {
      items.push(item);
    }
    if (!checked && items.includes(item)) {
      items.splice(items.indexOf(item), 1);
    }

    this.rs.filter();
  }

  changeStat(ev, stat: string) {
    const checked = ev.currentTarget.checked;
    const stats = this.rs.filterConfig.stats;
    if (checked && !stats.includes(stat)) {
      stats.push(stat);
    }
    if (!checked && stats.includes(stat)) {
      stats.splice(stats.indexOf(stat), 1);
    }

    this.rs.filter();
  }

  changeBuild(ev, build: { name: string, runewords: Array<string> }) {
    const checked = ev.currentTarget.checked;
    this.rs.filterConfig.build = checked ? build : null;
    this.rs.filter();
  }

}
