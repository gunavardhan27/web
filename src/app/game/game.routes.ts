import { Routes } from '@angular/router';
import { GameComponent } from './game.component';
import { DyslexiagameComponent } from './dyslexiagame/dyslexiagame.component';
import { FinderComponent } from './finder/finder.component';

export const GameRoutes: Routes = [
  { path: '', component: GameComponent },
  { path: 'play', component: DyslexiagameComponent },
  { path: 'results', component: DyslexiagameComponent }, 
  {path:'finder',component:FinderComponent}
];

