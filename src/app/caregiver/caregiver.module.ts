import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaregiverComponent } from './caregiver/caregiver.component';
import { CaregiverRoutes } from './caregiver.routes';
import { NavBarComponent } from '../home/components/nav-bar/nav-bar.component';
import { Footer } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CaregiverComponent,
    CaregiverRoutes,
    NavBarComponent,
  ]
})
export class CaregiverModule { }
