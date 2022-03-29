import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {LoginService} from "./login.service";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router

  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   // const currentUser = this.loginService.getCurrentUser();
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], /*{ queryParams: { returnUrl: state.url }}*/);
    return false;
  }
}
