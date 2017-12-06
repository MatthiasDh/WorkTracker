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
        if(JSON.parse(localStorage.getItem('isCustomer'))){
            //If the user logged in is a customer then redirect to the dashboard
            this.router.navigate(['/dashboard']);
        }else{
        this.isEdit = JSON.parse(localStorage.getItem('isEdit'));
        
        if(localStorage.getItem('editCustomer') !=null && this.isEdit == true)
        {
            this.isEdit = true;
            this.model = JSON.parse(localStorage.getItem('editCustomer'));
        }
    }
    }

    register() {
        this.loading = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model._userId = this.currentUser._id;
        this.model.isStarted = false;
        this.model.isFinished = false;
        this.model.usedProducts = [];
        this.model.todoItems=  [];
        this.model.inProgressItems = [];
        this.model.doneItems = [];
        this.customerService.create(this.model)
            .subscribe(
            data => {
                this.alertService.success('Registration successfull.', true);
                this.router.navigate(['/home']);
            },
            error => {
                this.alertService.error("Please enter valid information.");
                this.loading = false;
            });
    }

    update() {
        this.loading = true;
        this.customerService.update(this.model)
            .subscribe(data => {
                this.alertService.success('Update successfull.', true);
                this.router.navigate(['/home']);
            },
            error => {
                this.alertService.error("Could not update the user.");
                this.loading = false;
            });
    }

}