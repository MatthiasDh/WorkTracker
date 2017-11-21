import { Component, OnInit } from '@angular/core';
import { Customer } from "../../_models/customer";

import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './user.dashboard.component.html',
})
export class UserdashboardComponent implements OnInit {
  customer: Customer;
  isStarted: boolean;
  isFinished: boolean;

  constructor(private popup:Popup) { }

  ngOnInit() {
      this.customer = JSON.parse(localStorage.getItem('manageCustomer'));
      this.isStarted = this.customer.isStarted;
      this.isFinished = this.customer.isFinished;
  }

  notStarted() {
    this.isStarted = false;
    this.isFinished = false;
  }

  finished() {
    this.isStarted = false;
    this.isFinished = true;
  }

  inProgress() {
    this.isStarted = true;
    this.isFinished = false;
  }

  addProduct() {
    this.popup.show();
  }
} 