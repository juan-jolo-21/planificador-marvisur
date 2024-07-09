import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  return next(req);
};
