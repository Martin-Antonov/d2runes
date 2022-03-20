import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SeoService} from "../../services/seo/seo.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService) {
    this.seo.setHome();
  }

  ngOnInit(): void {
  }
}
