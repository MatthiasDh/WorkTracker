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
    dummyCustomer: Customer;

    constructor(private userService: UserService, private customerService: CustomerService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllCustomersOfCurrentUser();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        /*this.customer1 = new Customer(this.currentUser, "testUser", "test", "test", "user");
        this.customerService.create(this.customer1).subscribe();*/
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadAllCustomersOfCurrentUser() {
        this.customerService.getAll().subscribe(customers => {this.customers = customers});
    }
}