import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  searchBoxVisible: boolean;

  constructor() {
    this.searchBoxVisible = false;
  }

  ngOnInit(): void {
  }

}
