import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ts: Title) {
    this.ts.setTitle('Diablo II Resurrected Runeword Explorer | Welcome');
  }

  ngOnInit(): void {
  }
}
