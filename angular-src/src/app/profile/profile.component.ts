import {Customer} from "../_models/customer";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/user'; 
 
@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})
 
export class ProfileComponent implements OnInit {
    model: any = {};
    user: User;
    isCustomer: boolean;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router) { }
 
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.isCustomer = JSON.parse(localStorage.getItem('isCustomer'));
    }
}