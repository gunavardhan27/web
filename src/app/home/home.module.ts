import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HomeRoutingModule } from './home.route';
import { MessagesComponent } from './components/messages/messages.component';
import { SharedInterfaceComponent } from './components/shared-interface/shared-interface.component';
import { MenuComponent } from './components/menu/menu.component';
import { AuthenticationService } from '../authentication/services/authentication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainComponent,
    HomeRoutingModule,
    MessagesComponent,
    SharedInterfaceComponent,
    MenuComponent
  ],
  providers: [AuthenticationService]
})
export class HomeModule { }
