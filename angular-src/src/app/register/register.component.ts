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
    isEdit: boolean;

    constructor(
        private router: Router,
        private customerService: CustomerService,
        private alertService: AlertService
        ) { }

    ngOnInit() {
        this.isEdit = JSON.parse(localStorage.getItem('isEdit'));
        
        if(localStorage.getItem('editCustomer') !=null && this.isEdit == true)
        {
            this.isEdit = true;
            this.model = JSON.parse(localStorage.getItem('editCustomer'));
        }
    }

    register() {
        this.loading = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model._userId = this.currentUser._id;
        this.model.isStarted = false;
        this.model.isFinished = false;
        this.model.usedProducts = [];
        console.log(this.model);
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

    update() {
        console.log(this.model);
        this.loading = true;
        this.customerService.update(this.model)
            .subscribe(data => {
                this.alertService.success('Update successful', true);
                this.router.navigate(['/home']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

}