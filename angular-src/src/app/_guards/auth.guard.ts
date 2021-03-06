import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthenticationService, private router:Router){

  }

  canActivate(){
    if(this.authService.loggedIn()){
      if (localStorage.getItem('currentUser')) {
      }
      return true;
    } else {
      //If the user is not logged in redirect to the loginpage.
      this.router.navigate(['/login']);
      return false;
    }
  }
}