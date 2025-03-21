import { Router, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./components/main/main.component";
import { ScreeningComponent } from "./components/screening/screening.component";
import { AdhdScreeningComponent } from "./components/adhd-screening/adhd-screening.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
    {path: 'screening', component: ScreeningComponent},
    {path:'screening/adhd',component:AdhdScreeningComponent},
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }