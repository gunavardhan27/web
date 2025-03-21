import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home.route';
import { MessagesComponent } from './components/messages/messages.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { MlService } from './services/ml.service';
import { provideHttpClient } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ScreeningComponent } from './components/screening/screening.component';
import { AdhdScreeningComponent } from './components/adhd-screening/adhd-screening.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainComponent,
    HomeRoutingModule,
    MessagesComponent,
    MenuComponent,
    NavBarComponent,
    MatSlideToggleModule,
    ScreeningComponent,
    AdhdScreeningComponent
  ],
  providers: [AuthenticationService,MlService,provideHttpClient()]
})
export class HomeModule { }
