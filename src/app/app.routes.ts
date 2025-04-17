import { Routes } from '@angular/router';
import { authGuard, loginGuard } from './guards/auth.guard';
export const routes: Routes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule), canActivate: [loginGuard] },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [authGuard] },
    {path:'caregivers', loadChildren: () => import('./caregiver/caregiver.module').then(m => m.CaregiverModule), canActivate: [authGuard]},

];
