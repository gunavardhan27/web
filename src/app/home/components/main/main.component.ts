import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { SharedInterfaceComponent } from "../shared-interface/shared-interface.component";
import { MessagesComponent } from "../messages/messages.component";
import { AuthenticationService } from '../../../authentication/services/authentication.service';

@Component({
  selector: 'app-main',
  imports: [RouterModule, CommonModule, MenuComponent, SharedInterfaceComponent, MessagesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private authService: AuthenticationService, private router: Router) {

  }
  logout() {
    console.log(this.authService.logoutUser())
    this.router.navigate(['/auth/login'])
  }
}
