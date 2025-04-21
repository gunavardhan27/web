import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home.route';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { MlService } from './services/ml.service';
import { provideHttpClient } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ScreeningComponent } from './components/screening/screening.component';
import { AdhdScreeningComponent } from './components/adhd-screening/adhd-screening.component';
import { GamesModule } from './components/games/games.module';
import { GamesRoutingModule } from './components/games/games.route';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainComponent,
    HomeRoutingModule,
    NavBarComponent,
    MatSlideToggleModule,
    ScreeningComponent,
    AdhdScreeningComponent,GamesModule,AboutComponent,FaqComponent
  ],
  providers: [AuthenticationService,MlService,provideHttpClient()]
})
export class HomeModule { }
