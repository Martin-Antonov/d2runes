import {Injectable} from '@angular/core';
import {initialData} from "./InitialData";
import {RUNES_D2R} from "../runes/models/Runes";

@Injectable({
  providedIn: 'root'
})
export class LkService {
  runes: Array<string> = ['', 'Pul', 'Um', 'Mal', 'Ist', 'Gul', 'Vex', 'Ohm', 'Lo', 'Sur', 'Ber'];
  // tableInfo: Array<Array<string>> = [
  //   ['/p 1-2', '1', '1', '1', '-', '-', '-', '1', '-', '1', '1'],
  //   ['/p 3-4', '5', '4', '7', '1', '4', '1', '1', '3', '1', '1'],
  //   ['/p 5-6', '7', '8', '6', '3', '2', '6', '2', '4', '6', '2'],
  //   ['/p 7-8', '19', '13', '18', '8', '12', '6', '5', '3', '10', '5'],
  // ];
  tableInfo: Array<Array<string>> = [
    ['/p 1-2', '9', '8', '9', '4.2', '6', '2', '4', '3', '2.2', '1'],
    ['/p 3-4', '12.4', '7.4', '12', '8.4', '4.4', '3', '2', '4', '4.2', '2'],
    ['/p 5-6', '16.4', '11', '10', '5.2', '5', '6', '2', '4', '5.4', '4'],
    ['/p 7-8', '16', '10.2', '14.2', '5.4', '11', '6', '5', '2', '9', '2'],
  ];
  selectedRunes: Array<string> = ['Lo', 'Sur', 'Ber'];
  players: Array<string> = ['1-2', '3-4', '5-6', '7-8'];
  selectedIndex = 0;
  pulPlusStats = {sum: 80.8, probability: 0.00737, runs: 136, time: 1.1};
  istPlus = {sum: 40.4, probability: 0.00369, runs: 271, time: 2.3};
  surBerStats = {probability: 0.00101, runs: 990, sum: 11, time: 8.3};
  TOTAL_COMBINATIONS = 65534;

  constructor() {
    const initial = initialData;
    const runes = [];
    RUNES_D2R.forEach((item) => {
      runes.push(item.key);
    });
    const result = [];
    for (let i = 0; i < initial.length / 2; i++) {
      const current = initial[i * 2];
      const next = initial[i * 2 + 1];
      result[i] = {title: `p${i * 2 + 1}`, runes: []}
      Object.keys(current).forEach((item, k) => {
        if (k < 2) {
          return;
        }
        result[i].runes.push({name: item, prob: Math.round((0.19 * next[item] + 0.81 * current[item]) * 10) / 10});
      })

    }
    result.forEach((item) => {
      item.runes.sort((a, b) => {
        const rune1 = a.name.split(' ')[0];
        const rune2 = b.name.split(' ')[0];
        return runes.indexOf(rune1) > runes.indexOf(rune2) ? 1 : -1;
      })
    })
    console.log(this.probablity);
  }

  public get probablity(): { sum: number, probability: number, runs: number, time: number } {
    let sum = 0;
    for (let i = 1; i < this.tableInfo[this.selectedIndex].length; i++) {
      const item = this.tableInfo[this.selectedIndex][i];
      if (this.selectedRunes.includes(this.runes[i])) {
        sum += Number(item);
      }
    }
    sum = Math.round(sum * 10) / 10;

    const probability = Math.round((1 - Math.pow((this.TOTAL_COMBINATIONS - sum) / (this.TOTAL_COMBINATIONS), 6)) * 100000) / 100000;
    const runs = Math.round(1 / probability);
    const time = Math.round((runs / 120) * 10) / 10
    return {sum, probability, runs, time};
  }

  changeSelectedPlayers(increment: number) {
    this.selectedIndex = (this.selectedIndex + increment + this.players.length) % this.players.length;
  }

  toggleRuneVisibility(rune: string) {
    const isRunePresent = this.selectedRunes.includes(rune);
    if (isRunePresent && this.selectedRunes.length > 1) {
      this.selectedRunes.splice(this.selectedRunes.indexOf(rune), 1)
    } else if (!isRunePresent) {
      this.selectedRunes.push(rune);
    }
  }
}
