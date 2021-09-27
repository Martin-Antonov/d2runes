import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {RuneComponent} from "./components/rune/rune.component";
import {RunewordComponent} from "./components/runeword/runeword.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'runes/:runeId', component: RuneComponent},
  {path: 'runewords/:runewordId', component: RunewordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
