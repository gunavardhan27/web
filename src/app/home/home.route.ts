import { Router, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./components/main/main.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }