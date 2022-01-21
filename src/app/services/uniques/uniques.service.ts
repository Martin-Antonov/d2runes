import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniquesService {
  filterOpen: boolean = false;
  private items: any;

  constructor() {
  }
}
