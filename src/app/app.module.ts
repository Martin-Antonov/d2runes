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
import {FilterRwComponent} from "./components/runewords-page/filter-rw/filter-rw.component";
import {RunewordHoverComponent} from "./components/runewords-page/runeword-hover/runeword-hover.component";
import { HomeComponent } from './components/home/home.component';
import { RunewordsTableComponent } from './shared/components/runewords-table/runewords-table.component';
import { AdsContainerComponent } from './components/ads-container/ads-container.component';
import {TooltipModule} from "ng2-tooltip-directive";
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { RunewordSinglePageComponent } from './components/runeword-single-page/runeword-single-page.component';
import {RunePageComponent} from "./components/rune-page/rune-page.component";
import {RunePreviewComponent} from "./shared/components/rune-preview/rune-preview.component";
import { RuneComponent } from './shared/components/rune/rune.component';
import { CheatSheetComponent } from './components/cheat-sheet-page/cheat-sheet.component';
import { SocketingComponent } from './components/cheat-sheet-page/socketing/socketing.component';
import { UsefulRecipesComponent } from './components/cheat-sheet-page/useful-recipes/useful-recipes.component';
import { LowerKurastComponent } from './components/cheat-sheet-page/lower-kurast/lower-kurast.component';
import { FChartsComponent } from './components/cheat-sheet-page/f-charts/f-charts.component';
import { IndexComponent } from './components/cheat-sheet-page/index/index.component';
import { MappingComponent } from './components/cheat-sheet-page/mapping/mapping.component';
import { GamblingComponent } from './components/cheat-sheet-page/gambling/gambling.component';
import { UniquesPageComponent } from './components/uniques-page/uniques-page.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { InputComponent } from './shared/components/form-elements/input/input.component';
import { SliderComponent } from './shared/components/form-elements/slider/slider.component';
import { CheckboxComponent } from './shared/components/form-elements/checkbox/checkbox.component';
import { RangesliderComponent } from './shared/components/form-elements/rangeslider/rangeslider.component';
import { ItemPreviewComponent } from './components/uniques-page/item-preview/item-preview.component';
import { FilterItemsComponent } from './components/uniques-page/filter-items/filter-items.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { MobileMenuComponent } from './components/top-nav/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RunewordsPageComponent,
    RunePageComponent,
    FilterRwComponent,
    RunewordHoverComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    RunewordsTableComponent,
    RunePreviewComponent,
    AdsContainerComponent,
    PrivacyPolicyComponent,
    RunewordSinglePageComponent,
    RuneComponent,
    CheatSheetComponent,
    SocketingComponent,
    UsefulRecipesComponent,
    LowerKurastComponent,
    FChartsComponent,
    IndexComponent,
    MappingComponent,
    GamblingComponent,
    UniquesPageComponent,
    FilterComponent,
    InputComponent,
    SliderComponent,
    CheckboxComponent,
    RangesliderComponent,
    ItemPreviewComponent,
    FilterItemsComponent,
    ItemPageComponent,
    MobileMenuComponent,
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
