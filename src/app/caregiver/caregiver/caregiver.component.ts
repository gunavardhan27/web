import { Component } from '@angular/core';
import { NavBarComponent } from "../../home/components/nav-bar/nav-bar.component";
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Footer } from 'primeng/api';
import { FooterComponent } from '../../home/components/footer/footer.component';

@Component({
  selector: 'app-caregiver',
  imports: [NavBarComponent, MatButtonModule,
    MatStepperModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,],
  templateUrl: './caregiver.component.html',
  styleUrl: './caregiver.component.css'
})
export class CaregiverComponent {
  isLinear = true
  steps = ['Welcome', 'Consent', 'Questionnaire', 'Progress', 'Results', 'Recommendations', 'Share'];
  currentStep = 0;
  isDisabled = true
  toggleBox() {
    this.isDisabled = !this.isDisabled;

  }
  goToNextStep() {
    if (this.currentStep < this.steps.length - 1) this.currentStep++;
    console.log(this.currentStep)
  }

  goToPreviousStep() {
    if (this.currentStep > 0) this.currentStep--;
  }

  setStep(index: number) {
    this.currentStep = index;
  }

  questions = [
    {
      id: 1,
      text: "My child notices small details that others might miss",
      tooltip: "This might include visual details in pictures, subtle sounds, or small changes in routines or environments."
    },
    {
      id: 2,
      text: "My child has intense interests in specific topics",
      tooltip: "They may develop deep knowledge or enthusiasm for particular subjects, characters, or activities."
    },
    {
      id: 3,
      text: "My child prefers visual information over verbal instructions",
      tooltip: "They learn better when information is presented visually through pictures, diagrams, or demonstrations."
    },
    {
      id: 4,
      text: "My child is sensitive to sensory experiences (sounds, textures, lights)",
      tooltip: "They may notice sensory input more intensely than others or have stronger reactions to sensory stimuli."
    },
    {
      id: 5,
      text: "My child thinks outside the box when solving problems",
      tooltip: "They may approach challenges in unusual or creative ways that others might not consider."
    }
  ];
  currentQuestion = 0;
    previousQuestion() {
      if(this.currentQuestion > 0) {
        this.currentQuestion--;
      }
      
    }
    nextQuestion() {
      if(this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
      if(this.currentQuestion === this.questions.length-1) {
        this.goToNextStep()
      }
    }
    redirectToHome() {
      window.location.href = '/home';
    }
}
