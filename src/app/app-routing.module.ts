import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RunewordsPageComponent} from "./components/runewords-page/runewords-page.component";
import {PrivacyPolicyComponent} from "./components/privacy-policy/privacy-policy.component";
import {RunewordSinglePageComponent} from "./components/runeword-single-page/runeword-single-page.component";
import {RunePageComponent} from "./components/rune-page/rune-page.component";
import {CheatSheetComponent} from "./components/cheat-sheet-page/cheat-sheet.component";
import {SocketingComponent} from "./components/cheat-sheet-page/socketing/socketing.component";
import {UsefulRecipesComponent} from "./components/cheat-sheet-page/useful-recipes/useful-recipes.component";
import {LowerKurastComponent} from "./components/cheat-sheet-page/lower-kurast/lower-kurast.component";
import {FChartsComponent} from "./components/cheat-sheet-page/f-charts/f-charts.component";
import {UniquesPageComponent} from "./components/uniques-page/uniques-page.component";
import {ItemPageComponent} from "./components/item-page/item-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'runewords', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {
    path: 'runewords', children: [
      {path: '', component: RunewordsPageComponent},
      {path: ':runewordId', component: RunewordSinglePageComponent},
    ]
  },
  {
    path: 'runes', component: RunePageComponent, children: [
      {path: ':runeId', component: RunePageComponent},
    ]
  },
  {
    path: 'uniques', children: [
      {path: '', component: UniquesPageComponent},
      {path: ':item', component: ItemPageComponent}
    ]
  },
  {
    path: 'cheatsheet', children: [

      {path: '', component: CheatSheetComponent},
      {path: 'socketing', component: SocketingComponent},
      {path: 'useful-recipes', component: UsefulRecipesComponent},
      {path: 'lk-farming', component: LowerKurastComponent},
      {path: 'charts', component: FChartsComponent},
      // {path: 'mapping', component: MappingComponent},
      // {path: 'gambling', component: GamblingComponent},
    ]
  },
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
