import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValueChangeEvent } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MatInputModule } from '@angular/material/input'
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
declare var bootstrap: any; 
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    MatInputModule,
    CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showModal: boolean = false
  ngOnInit() {
      this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  userForm!: FormGroup
  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
    })
  }

  login() {
    this.authService.loginUser(this.userForm.controls['username'].value, this.userForm.controls['password'].value).subscribe({
      next: (res: any) => {
        console.log(res)
        if (res.success) {
          localStorage.setItem('token', res.token)
          this.router.navigate(['/home'])
        }
        else {
          alert(res.error)
          this.router.navigate(['/auth/register'])
        }
      }, error: (err) => {
        console.log(err)
      }
    })
  }
  exploreAnonymously() {
    localStorage.setItem('token','guest')
    this.router.navigate(['/home'])
  }
}
