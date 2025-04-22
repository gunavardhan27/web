import { Component } from '@angular/core';
import { NavBarComponent } from "../../home/components/nav-bar/nav-bar.component";
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ab = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14']
  ngOnInit(): void {
    this.form = this.fb.group({
      answers: this.fb.array(
        new Array(15).fill(null).map(() =>
          this.fb.group({
            answer: [0, Validators.required]
          })
        )
      )
    });
  }

  get answers(): FormArray {
    return this.form.get('answers') as FormArray;
  }

  submit() {
    console.log(this.form.value);
    // You can map questions with answers here if needed
  }
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
    if(this.currentQuestion>0)this.currentQuestion-=1
    if (this.currentStep > 0) this.currentStep--;
  }

  setStep(index: number) {
    this.currentStep = index;
  }

  questions = [
    {
      id: 1,
      text:"Does the person have difficulty understanding why someone might be upset",
      tooltip: "This might include visual details in pictures, subtle sounds, or small changes in routines or environments."
    },
    {
      id: 2,
      text: "Does the person have difficulty understanding why someone might be upset",
      tooltip: "They may develop deep knowledge or enthusiasm for particular subjects, characters, or activities."
    },
    {
      id: 3,
      text: "Does the person have difficulty maintaining a conversation or responding appropriately to questions",
      tooltip: "They learn better when information is presented visually through pictures, diagrams, or demonstrations."
    },
    {
      id: 4,
      text: "Does the person show little interest in making friends or participating in group activities",
      tooltip: "They may notice sensory input more intensely than others or have stronger reactions to sensory stimuli."
    },
    {
      id: 5,
      text: "Does the person engage in repetitive behaviors (e.g., hand-flapping, repeating the same phrases)",
      tooltip: "They may approach challenges in unusual or creative ways that others might not consider."
    }
  ];

  qchatQuestions = [
    {
      id: 1,
      text: "Does your child look at you when you call his/her name?",
      type: "positive",
      tooltip: "Checks if the child responds to their name, an early sign of social awareness."
    },
    {
      id: 2,
      text: "How easy is it for you to get eye contact with your child?",
      type: "positive",
      tooltip: "Assesses how naturally the child maintains eye contact during interactions."
    },
    {
      id: 3,
      text: "Does your child point to indicate that he/she wants something?",
      type: "positive",
      tooltip: "Evaluates use of gestures to communicate wants or needs."
    },
    {
      id: 4,
      text: "Does your child point to share interest with you?",
      type: "positive",
      tooltip: "Looks for social sharing behavior, like pointing out objects of interest."
    },
    {
      id: 5,
      text: "Does your child pretend play? (e.g., talk on a toy phone)",
      type: "positive",
      tooltip: "Assesses imaginative or symbolic play, which reflects social-cognitive development."
    },
    {
      id: 6,
      text: "Does your child follow where you’re looking?",
      type: "positive",
      tooltip: "Checks joint attention — whether the child follows your gaze or pointing."
    },
    {
      id: 7,
      text: "If someone in the family is upset, does your child try to comfort them?",
      type: "positive",
      tooltip: "Measures empathy or emotional understanding in social situations."
    },
    {
      id: 8,
      text: "Would you describe your child’s first words as: on time / delayed / not yet spoken?",
      type: "positive",
      tooltip: "Tracks language development milestone and age-appropriateness."
    },
    {
      id: 9,
      text: "Does your child use simple gestures? (e.g., wave goodbye)",
      type: "positive",
      tooltip: "Checks for non-verbal communication skills like waving or nodding."
    },
    {
      id: 10,
      text: "Does your child stare at nothing with no apparent purpose?",
      type: "negative",
      tooltip: "Identifies possible signs of social disengagement or lack of awareness."
    }
  ];
  
  currentQuestion = 0;
    previousQuestion() {
      if(this.currentQuestion > 0) {
        this.currentQuestion--;
      }
      
    }
    nextQuestion() {

      if(this.currentQuestion < this.questions.length) {
        this.currentQuestion++;
      }
      console.log(this.currentQuestion)
      this.answers.at(this.currentQuestion).get('answer')?.reset(null);
    }

    nextQchatQuestion() {
      if(this.currentQuestion === this.qchatQuestions.length + 4){
        this.submit()
        this.goToNextStep()
      }
      if(this.currentQuestion < this.qchatQuestions.length + 5) {
        this.currentQuestion++;
      }
    }
    redirectToHome() {
      window.location.href = '/home';
    }
}
