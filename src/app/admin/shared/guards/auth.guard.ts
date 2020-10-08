import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';
import {Observable} from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/admin', 'login']);
      return false;
    }
  }
}
