import { Router, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./components/main/main.component";
import { ScreeningComponent } from "./components/screening/screening.component";
import { AdhdScreeningComponent } from "./components/adhd-screening/adhd-screening.component";
import { GamesModule } from "./components/games/games.module";

export const routes: Routes = [
    { path: '', component: MainComponent },
    {path: 'screening', component: ScreeningComponent},
    {path:'screening/adhd',component:AdhdScreeningComponent},
    {path:'games', loadChildren: () => import('./components/games/games.module').then(m => m.GamesModule)},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }