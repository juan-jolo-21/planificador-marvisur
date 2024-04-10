import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log("a");
  console.log(authService.isAuthenticaded());
  if (authService.isAuthenticaded()) {
    return true;
  } else {
    const url = router.navigateByUrl('/');
    return url;
  }
};
