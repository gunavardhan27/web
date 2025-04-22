import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameRoutes } from './game.routes';
import { NavBarComponent } from '../home/components/nav-bar/nav-bar.component';
import { GameComponent } from './game.component';
import { DyslexiagameComponent } from './dyslexiagame/dyslexiagame.component';
import { FinderComponent } from './finder/finder.component';
import { MlService } from '../home/services/ml.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GameRoutes),
    GameComponent,              
    DyslexiagameComponent,
    NavBarComponent,
    FinderComponent,
    ],
    providers: [
      MlService
  ]
})
export class GameModule { }
