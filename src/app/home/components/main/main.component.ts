import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { SharedInterfaceComponent } from "../shared-interface/shared-interface.component";
import { MessagesComponent } from "../messages/messages.component";
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { MlService } from '../../services/ml.service';
import { ADHD } from '../../interface';

@Component({
  selector: 'app-main',
  imports: [RouterModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  inputData:ADHD = {
    "SRS_RAW_TOTAL": 128,
      "SRS_AWARENESS": 7.970767357,
      "SRS_COGNITION": 9.563946407,
      "SRS_COMMUNICATION": 18.17667845,
      "SRS_MOTIVATION": 9.532391048,
      "SRS_MANNERISMS": 9.795053004
  }
  responseData!:number
  constructor(private authService: AuthenticationService, private router: Router,private mlService:MlService) {

  }
  logout() {
    console.log(this.authService.logoutUser())
    this.router.navigate(['/auth/login'])
  }

  getAdhdResponse(){
    this.mlService.getAdhdResponse(this.inputData).subscribe({next:(res)=>{
      console.log(res)
    },error:(err)=>{
      console.log(err)
    }})
  }

}
