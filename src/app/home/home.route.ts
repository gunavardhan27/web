import { Router, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./components/main/main.component";
import { ScreeningComponent } from "./components/screening/screening.component";
import { AdhdScreeningComponent } from "./components/adhd-screening/adhd-screening.component";
// import { GamesModule } from "./components/games/games.module";
import { AboutComponent } from "./components/about/about.component";
import { FaqComponent } from "./components/faq/faq.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
    {path: 'screening', component: ScreeningComponent},
    {path:'screening/adhd',component:AdhdScreeningComponent},
    // {path:'games', loadChildren: () => import('./components/games/games.module').then(m => m.GamesModule)},
    {path:'games', loadChildren: () => import('../game/game.module').then(m => m.GameModule)},
    {path:'about',component:AboutComponent},
    {path:'faq',component:FaqComponent

    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }