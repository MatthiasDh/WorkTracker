import {Customer} from "../_models/customer";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../_services/alert.service';
import {AuthenticationService} from '../_services/authentication.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
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
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        let succes = false;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    localStorage.setItem('isCustomer',JSON.stringify(false));
                },
                error => {
                    this.authenticationService.loginCustomer(this.model.username, this.model.password)
                    .subscribe(
                        data => {
                            this.router.navigate(['/dashboard']);
                            localStorage.setItem('isCustomer',JSON.stringify(true));
                        },
                        error => {
                            this.alertService.error(error);
                            this.loading = false;
                        });
                });
    }
}