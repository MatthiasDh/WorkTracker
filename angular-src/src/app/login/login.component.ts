import { Customer} from "../_models/customer";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService} from '../_services/authentication.service';
import { slideRightLeftAnimation} from '../_animations/slide-right-left.animation';

 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    animations:[slideRightLeftAnimation],
    host: { '[@slideRightLeftAnimation]':''}
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        //Reset login status
        this.authenticationService.logout();
 
        //Get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        let succes = false;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    //If the authentication succeeds then the user trying to log in is an admin.
                    this.router.navigate([this.returnUrl]);
                    localStorage.setItem('isCustomer',JSON.stringify(false));
                },
                error => {
                    //If the authentication fails we check if it is a customer that is trying to login
                    this.authenticationService.loginCustomer(this.model.username, this.model.password)
                    .subscribe(
                        data => {
                            this.router.navigate(['/dashboard']);
                            //Add a boolean to the localstorage to indicate that the user logged in is a customer and should have different permissions.
                            localStorage.setItem('isCustomer',JSON.stringify(true));
                        },
                        error => {
                            this.alertService.error("The current user does not exist.");
                            this.loading = false;
                        });
                });
    }
}