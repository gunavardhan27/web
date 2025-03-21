import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MlService } from '../../services/ml.service';
import { ADHD } from '../../interface';

@Component({
  selector: 'app-adhd-screening',
  imports: [NavBarComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './adhd-screening.component.html',
  styleUrl: './adhd-screening.component.css'
})
export class AdhdScreeningComponent {
  adhdForm!: FormGroup
  response!:boolean
  constructor(private fb:FormBuilder,private mlService:MlService){
    this.adhdForm = this.fb.group({
      SRS_RAW_TOTAL: ['', [Validators.required, Validators.min(0), Validators.max(400)]],
      SRS_AWARENESS: ['', [Validators.required, Validators.min(0), Validators.max(400)]],
      SRS_COGNITION: ['', [Validators.required, Validators.min(0), Validators.max(400)]],
      SRS_COMMUNICATION: ['', [Validators.required, Validators.min(0), Validators.max(400)]],
      SRS_MOTIVATION: ['', [Validators.required, Validators.min(0), Validators.max(400)]],
      SRS_MANNERISMS: ['', [Validators.required, Validators.min(0), Validators.max(400)]],
    });
  }

  getAdhdResponse(inputData:ADHD){
    this.mlService.getAdhdResponse(inputData).subscribe({next:(res:any)=>{
      this.response = res.prediction
    },error:(err)=>{
      console.log(err)
    }})
  }
  onSubmit() {
    if (this.adhdForm.valid) {
      console.log('Form Data:', this.adhdForm.value);
      this.getAdhdResponse(this.adhdForm.value)
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
