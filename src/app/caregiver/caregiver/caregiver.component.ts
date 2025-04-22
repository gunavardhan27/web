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
import { ADHD, ASD } from '../../home/interface';
import { MlService } from '../../home/services/ml.service';

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
  adhdKeys = [
    'SRS_AWARENESS', 'SRS_COGNITION',
    'SRS_COMMUNICATION', 'SRS_MOTIVATION', 'SRS_MANNERISMS'
  ]

  asdKeys = [
    'A1', 'A2', 'A3', 'A4', 'A5',
    'A6', 'A7', 'A8', 'A9', 'A10',
    'Age_Mons', 'Qchat_10_Score',
    'Sex', 'Ethnicity', 'Jaundice',
    'Family_mem_with_ASD', 'relation'
  ];
  form!: FormGroup;
  hasASD = false;
  hasADHD = false

  constructor(private fb: FormBuilder,private readonly mlService:MlService) {}
  ab = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14']
  ngOnInit(): void {
    this.form = this.fb.group({
      answers: this.fb.array(
        new Array(15).fill(null).map(() =>
          this.fb.group({
            answer: [ 0, Validators.required]
          })
        )
      )
    });
  }
  responses = new Array(15).fill(0)

  get answers(): FormArray {
    return this.form.get('answers') as FormArray;
  }

  submit() {
    console.log(this.responses);
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
    console.log(this.hasASD)
    if (this.currentStep < this.steps.length - 1) this.currentStep++;
  }
  nextStepAndResults() {
    const asd = this.getAsdData()
    const adhd = this.getAdhdData()
    this.mlService.getAdhdResponse(adhd).subscribe({next:(response:any)=>{
      this.hasADHD = true ? response.prediction === 1 : false
      console.log(response)
    }})
    this.mlService.getAsdResponse(asd).subscribe({next:(response)=>{
      this.hasASD = true ? response === 1 : false

    }})
    this.goToNextStep()
  }

  getAdhdData() {
    const answersArray = this.form.get('answers') as FormArray;

    const firstFiveValues = this.responses.slice(0, 5);
    const data = {} as ADHD;
    data['SRS_RAW_TOTAL'] = (firstFiveValues[0] + firstFiveValues[1] + firstFiveValues[2] + firstFiveValues[3] + firstFiveValues[4])
    
    for (let i = 0; i < firstFiveValues.length; i++) {
      (data as any)[this.adhdKeys[i]] = firstFiveValues[i];
    }
    
    console.log(data)
    return data;
  }

  getAsdData() {
    const answersArray = this.form.get('answers') as FormArray;
    const nextTenValues = this.responses.slice(5, 15);

    const data = {} as ASD;
    for (let i = 0; i < nextTenValues.length; i++) {
      (data as any)[this.asdKeys[i]] = nextTenValues[i];
    }
    data['Age_Mons'] = 30
    data['Qchat_10_Score'] = nextTenValues[0] + nextTenValues[1] + nextTenValues[2] + nextTenValues[3] + nextTenValues[4] + nextTenValues[5] + nextTenValues[6] + nextTenValues[7] + nextTenValues[8] + nextTenValues[9]
    data['Sex'] = 'f'
    data['Ethnicity'] = 'middle eastern'
    data['Jaundice'] = 'yes'
    data['Family_mem_with_ASD'] = 'no'
    data['relation'] = 'family member'
    
    
    
    console.log(data)
    return data;
    
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
    },
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

      if(this.currentQuestion === 14) {
        this.currentQuestion++;
        this.submit()
        this.goToNextStep()
      }
<<<<<<< HEAD
      console.log(this.currentQuestion)
      this.answers.at(this.currentQuestion).get('answer')?.reset(null);
=======
      if(this.currentQuestion < 14) {
        this.currentQuestion ++;
      }

      
>>>>>>> d755d643ce728074c60d08942a89cc91361d14f7
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
