import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './components/games/games.component';
import { GamesRoutingModule } from './games.route';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GamesComponent,
    GamesRoutingModule
  ]
})
export class GamesModule { }
