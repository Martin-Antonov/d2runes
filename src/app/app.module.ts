import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AdsenseModule} from "ng2-adsense";
import { HomeComponent } from './components/home/home.component';
import { RuneComponent } from './components/rune/rune.component';
import { RunewordComponent } from './components/runeword/runeword.component';
import { FilterComponent } from './components/home/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RuneComponent,
    RunewordComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-7640562161899788',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
