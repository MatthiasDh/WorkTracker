import { Component, OnInit } from '@angular/core';
import { Customer } from "../_models/customer";
import { User } from '../_models/user';
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

    /*customer1: Customer;*/

    constructor(private userService: UserService, private customerService: CustomerService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllCustomersOfCurrentUser();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        /*this.customer1 = new Customer(this.currentUser, "testUser", "test", "test", "user");
        this.customerService.create(this.customer1).subscribe();*/
    }

    deleteCustomer(_id: string) {
        this.customerService.delete(_id).subscribe(() => { this.loadAllCustomersOfCurrentUser() });
    }


    editCustomer(_id: string){
        console.log("Still needs to be implemented");
    }

    private loadAllCustomersOfCurrentUser() {
        this.customerService.getAll(this.currentUser._id).subscribe(customers => { this.customers = customers; });
    }
}