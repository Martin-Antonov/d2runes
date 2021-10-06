import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdsenseModule} from "ng2-adsense";
import {RuneComponent} from './components/rune/rune.component';
import {RunewordComponent} from './components/runeword/runeword.component';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClickOutsideModule} from 'ng-click-outside';
import {TopNavComponent} from './components/top-nav/top-nav.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {RunewordsPageComponent} from "./components/runewords-page/runewords-page.component";
import {FilterComponent} from "./components/runewords-page/filter/filter.component";
import {RunewordHoverComponent} from "./components/runewords-page/runeword-hover/runeword-hover.component";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RunewordsPageComponent,
    RuneComponent,
    RunewordComponent,
    FilterComponent,
    RunewordHoverComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7640562161899788',
    }),
    NgxSliderModule,
    BrowserAnimationsModule,
    ClickOutsideModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
