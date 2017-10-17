import { Component, OnInit } from '@angular/core';
import { Customer } from "../../_models/customer";

@Component({
  selector: 'app-userdashboard',
  templateUrl: './user.dashboard.component.html',
})
export class UserdashboardComponent implements OnInit {
  customer: Customer;
  constructor() { }

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem('manageCustomer'));
  }

}