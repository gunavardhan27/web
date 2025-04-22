import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { MlService } from '../../services/ml.service';
import { ADHD } from '../../interface';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  imports: [RouterModule, CommonModule, NavBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  accessibilityMenu = false
  cardData = [{
    iconName: '',
    title:'Interactive Reading',
    content:'Read engaging passages designed to understand your reading style',
  },{
    iconName:'',
    title:'Smart Analysis',
    content:'Get insights about your reading speed and comprehension'
  },{
    iconName:'',
    title:'Personalized Tips',
    content:'Receive customized learning recommendations just for you'
  }]
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

  // getAdhdResponse(){
  //   this.mlService.getAdhdResponse(this.inputData).subscribe({next:(res)=>{
  //     console.log(res)
  //   },error:(err)=>{
  //     console.log(err)
  //   }})
  // }

  gotoScreening(){
    this.router.navigate(['/home/screening'])
  }
  toggleAccessibilityMenu() {
    console.log('avc')
    this.accessibilityMenu = !this.accessibilityMenu
  }
  redirectToGames() {
    this.router.navigate(['/dyslexia_game'])
  }
  careGiverModule() {
    this.router.navigate(['/caregivers'])
  }
}
