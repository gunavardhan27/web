import { Component, EventEmitter, Output } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-screening',
  imports: [NavBarComponent],
  templateUrl: './screening.component.html',
  styleUrl: './screening.component.css'
})
export class ScreeningComponent {
  constructor(private router:Router){

  }
  @Output() logoutEvent: EventEmitter<null> = new EventEmitter()
  logout(){
    this.logoutEvent.emit()
  }
  asdScreening(){

  }
  adhdScreening(){
    this.router.navigate(['/home/screening/adhd'])
  }
  dyslexiaScreening(){

  }
}
