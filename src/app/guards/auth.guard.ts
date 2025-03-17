import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router)
  if (isAuthenticated()) {
    return true
  }
  return router.navigate(['/auth/login'])
};



export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  if (isAuthenticated()) {
    router.navigate(['/home']);
    return false
  }
  return true
};

const isAuthenticated = () => {
  if (localStorage.getItem('token')) {
    return true
  }
  return false
}