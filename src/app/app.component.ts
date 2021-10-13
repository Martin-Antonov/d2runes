import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SitemapGeneratorService} from "./services/sitemap-generator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd2r-runes';

  // constructor(private sg: SitemapGeneratorService){
  //
  // }
}
