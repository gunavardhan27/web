import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { FormsModule } from '@angular/forms';
import { MlService } from '../../home/services/ml.service';
import { dyslexia, noDyslexia } from './data';

@Component({
  selector: 'app-finder',
  imports: [CommonModule,FormsModule],
  templateUrl: './finder.component.html',
  styleUrl: './finder.component.css'
})
export class FinderComponent implements AfterViewInit {
  learningEnvironmentAdaptations: any;
  keyStrengths: any;
  recommendedActivities: any;
  learningStylePreferences: any;
  constructor(private router:Router, private ml:MlService){}
  ngAfterViewInit(): void {
    this.learningEnvironmentAdaptations = noDyslexia.learningEnvironmentAdaptations
              this.keyStrengths = noDyslexia.keyStrengths
              this.recommendedActivities = noDyslexia.recommendedActivities
              this.learningStylePreferences = noDyslexia.learningStylePreferences
  }
  currentStep = 0;
  steps = ['Upload game data','Results','Recommendations'];
  gameData!:any
  setStep(step:number) {
    this.currentStep = step
  }

  previousStep() {
    if(this.currentStep>0) {
      this.currentStep = this.currentStep - 1
    } 
  }

  nextStep() {
    if(this.currentStep<this.steps.length-1) {
      this.currentStep = this.currentStep + 1
    } else{
      this.router.navigate(['/dyslexia_game'])
    }
  }
  upload(){
    this.ml.getDyslexiaResponse(JSON.parse(this.gameData)).subscribe({next:(response:any)=>{
      if(response === 1){
        this.learningEnvironmentAdaptations = dyslexia.learningEnvironmentAdaptations
        this.keyStrengths = dyslexia.keyStrengths
        this.recommendedActivities = dyslexia.recommendedActivities
        this.learningStylePreferences = dyslexia.learningStylePreferences
      }
  }})
    this.nextStep()
  }
}
