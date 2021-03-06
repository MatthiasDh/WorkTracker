import { Component, OnInit } from '@angular/core';
import { Customer } from "../_models/customer";
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { CustomerService } from '../_services/customer.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    customers: Customer[] = [];
    users: User[] = [];


    constructor(private userService: UserService, private customerService: CustomerService,private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        if(JSON.parse(localStorage.getItem('isCustomer'))){
            //If the user logged in is a customer then redirect to the dashboard
            this.router.navigate(['/dashboard']);
        }else{
            this.loadAllCustomersOfCurrentUser();
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    }

    deleteCustomer(_id: string) {
        this.customerService.delete(_id).subscribe(() => { this.loadAllCustomersOfCurrentUser() });
    }
    
    editCustomer(_id: string){
        localStorage.setItem('isEdit',JSON.stringify(true));
        this.customerService.getById(_id).subscribe(data => {
            localStorage.setItem('editCustomer',JSON.stringify(data));
            this.router.navigate(['/register']);
        });
    }

    manageCustomer(_id: string){
        this.customerService.getById(_id).subscribe(data => {
            localStorage.setItem('manageCustomer',JSON.stringify(data));
            this.router.navigate(['/dashboard']);
        });
    }

    createNewCustomer(){
        localStorage.setItem('isEdit',JSON.stringify(false));
        this.router.navigate(['/register']);
    }
    private loadAllCustomersOfCurrentUser() {
        this.customerService.getAllCustomersFromUser(this.currentUser._id).subscribe(customers => { this.customers = customers; });
    }


}