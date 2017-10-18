import { Component, OnInit } from '@angular/core';
import { Customer } from "../../_models/customer";

@Component({
  selector: 'app-userdashboard',
  templateUrl: './user.dashboard.component.html',
})
export class UserdashboardComponent implements OnInit {
  customer: Customer;
  isStarted: boolean;
  isFinished: boolean;
  constructor() { }

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem('manageCustomer'));
    this.isStarted = this.customer.isStarted;
    this.isFinished = this.customer.isFinished;
  }

}