import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RuneComponent} from "./components/rune/rune.component";
import {RunewordComponent} from "./components/runeword/runeword.component";
import {HomeComponent} from "./components/home/home.component";
import {RunewordsPageComponent} from "./components/runewords-page/runewords-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {
    path: 'runewords', component: RunewordsPageComponent, children: [
      {path: ':runewordId', component: RunewordComponent},
    ]
  },
  {
    path: 'runes', component: RuneComponent, children: [
      {path: ':runewordId', component: RuneComponent},]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
