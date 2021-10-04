import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdsenseModule} from "ng2-adsense";
import {HomeComponent} from './components/home/home.component';
import {RuneComponent} from './components/rune/rune.component';
import {RunewordComponent} from './components/runeword/runeword.component';
import {FilterComponent} from './components/home/filter/filter.component';
import {RunewordHoverComponent} from './components/home/runeword-hover/runeword-hover.component';
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClickOutsideModule} from 'ng-click-outside';
import {TopNavComponent} from './components/top-nav/top-nav.component';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RuneComponent,
    RunewordComponent,
    FilterComponent,
    RunewordHoverComponent,
    TopNavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7640562161899788',
    }),
    NgxSliderModule,
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
