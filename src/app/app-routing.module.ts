import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RunewordsPageComponent} from "./components/runewords-page/runewords-page.component";
import {PrivacyPolicyComponent} from "./components/privacy-policy/privacy-policy.component";
import {RunewordSinglePageComponent} from "./components/runeword-single-page/runeword-single-page.component";
import {RunePageComponent} from "./components/rune-page/rune-page.component";

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
      {path: ':runeId', component: RunePageComponent},]
  },
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
