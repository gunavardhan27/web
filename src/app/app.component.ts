import { Component } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    imports: [AuthenticationModule, RouterModule,
        InputTextModule,
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

}
