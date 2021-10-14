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

  constructor() {
    window.onresize = () => {
      this.resizeForLargeScreens();
    }

    this.resizeForLargeScreens();
  }

  resizeForLargeScreens() {
    debugger;
    const ratio = window.innerWidth / 1920;
    if (ratio > 1) {
      document.body.style.transform = 'scale(' + ratio.toString() + ')';
      document.body.style.transformOrigin = 'top left'
    } else {
      document.body.style.transform = 'scale(1)';
      document.body.style.transformOrigin = ''
    }
  }
}
