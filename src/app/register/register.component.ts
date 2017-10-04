import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { CustomerService } from '../_services/customer.service';
import { User } from '../_models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    currentUser: User;
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private customerService: CustomerService,
        private alertService: AlertService) { }

    ngOnInit() {
        
    }

    register() {
        this.loading = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model.user = this.currentUser;
        this.customerService.create(this.model)
            .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/home']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

}