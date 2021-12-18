import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdsenseModule} from "ng2-adsense";
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
import { RunewordsTableComponent } from './components/runewords-table/runewords-table.component';
import { AdsContainerComponent } from './components/ads-container/ads-container.component';
import {TooltipModule} from "ng2-tooltip-directive";
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RunewordSinglePageComponent } from './components/runeword-single-page/runeword-single-page.component';
import { RuneHoverComponent } from './components/runewords-page/rune-hover/rune-hover.component';
import {RunePageComponent} from "./components/rune-page/rune-page.component";
import {RunePreviewComponent} from "./components/rune-page/rune-preview/rune-preview.component";
import { RuneComponent } from './shared/components/rune/rune.component';
import { CheatSheetComponent } from './components/cheat-sheet-page/cheat-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    RunewordsPageComponent,
    RunePageComponent,
    FilterComponent,
    RunewordHoverComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    RunewordsTableComponent,
    RunePreviewComponent,
    AdsContainerComponent,
    PrivacyPolicyComponent,
    RunewordSinglePageComponent,
    RuneHoverComponent,
    RuneComponent,
    CheatSheetComponent,
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
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
