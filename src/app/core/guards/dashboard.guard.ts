import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  const ROUTER = inject(Router);
  const authService = inject(AuthService);

  return authService.
    verifyToken()
    .pipe(
      map((isAuthenticated)=> 
        isAuthenticated? true: ROUTER.createUrlTree(['auth/login'])
      )
    )  
};
