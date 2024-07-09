import { inject } from '@angular/core';
import { CanActivateFn, Router, CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.isAuthenticaded() && authService.userTypeLoggining(state.url.slice(1))) {
    return true;
  } else {
    const url = router.createUrlTree(['/']);
    return url;
  }
};

export const authGuardMatch: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  return authService.isAuthenticaded();
}




