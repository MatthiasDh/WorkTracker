import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../_services/alert.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent {
    currentUser: User;
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.loadCurrentUser();
    }

    loadCurrentUser() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userService.getById(this.currentUser._id).subscribe(user => {
            this.currentUser = user;});
        }
    }
