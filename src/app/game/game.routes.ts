import { Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { DyslexiagameComponent } from './dyslexiagame/dyslexiagame.component';

export const GameRoutes: Routes = [
  { path: '', component: GameComponent },
  { path: 'play', component: DyslexiagameComponent },
  { path: 'results', component: DyslexiagameComponent }, 
];

