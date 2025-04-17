import { RouterModule, Routes } from '@angular/router';
import { CaregiverComponent } from './caregiver/caregiver.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'',component:CaregiverComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CaregiverRoutes {}