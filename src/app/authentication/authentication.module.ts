import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password'
import { AuthenticationRoutingModule } from './authentication.routes';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginComponent,
    RegisterComponent,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule, AuthenticationRoutingModule, RouterModule
  ],
  providers: [AuthenticationService, provideHttpClient()]
})
export class AuthenticationModule { }
