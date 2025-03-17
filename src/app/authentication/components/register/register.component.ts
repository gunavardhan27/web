import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MatInputModule } from '@angular/material/input'
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    MatInputModule,
    RouterModule,
    CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userForm!: FormGroup
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {

    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
    })
  }

  register() {
    this.authService.registerUser(this.userForm.controls['username'].value, this.userForm.controls['password'].value).subscribe({
      next: (res: any) => {
        console.log(res)
        if (res.success) {
          this.router.navigate(['/auth/login'])
        }
        else {
          console.log(res.error)
        }
      }, error: (err) => {
        console.log(err)
      }
    })
  }

}
