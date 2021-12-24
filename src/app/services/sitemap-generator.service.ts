import {Injectable} from '@angular/core';
import {RunesService} from "./runes/runes.service";

@Injectable({
  providedIn: 'root'
})
export class SitemapGeneratorService {

  constructor(private rs: RunesService) {
    const prefix = "https://d2runes.io/#/";
    const urls = [{url: 'home', priority: 0.7}]
    urls.push({url: 'runewords', priority: 1});
    urls.push({url: 'runes', priority: 0.8});
    urls.push({url: 'cheatsheet', priority: 0.9});
    urls.push({url: 'cheatsheet/socketing', priority: 0.7});
    urls.push({url: 'cheatsheet/useful-recipes', priority: 0.7});
    urls.push({url: 'cheatsheet/lk-farming', priority: 0.7});
    urls.push({url: 'cheatsheet/charts', priority: 0.7});
    // urls.push({url: 'cheatsheet/mapping', priority: 0.7});
    // urls.push({url: 'cheatsheet/gambling', priority: 0.7});
    rs.runes.forEach((r) => {
      urls.push({url: 'runes/' + r.key.toLowerCase(), priority: 0.8});
    });
    rs.runewords.forEach((r) => {
      urls.push({url: 'runewords/' + r.name.split(" ").join("").toLowerCase(), priority: 0.9});
    });

    const result = urls.map((res) => {
      return `<url>
    <loc>${prefix + res.url}</loc>
    <lastmod>2021-08-10</lastmod>
    <priority>${res.priority}</priority>
    </url>`
    });
  }
}
