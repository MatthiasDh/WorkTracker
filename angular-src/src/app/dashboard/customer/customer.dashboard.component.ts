import { Component, OnInit } from '@angular/core';
import { Customer } from "../../_models/customer";
import { CustomerService } from '../../_services/customer.service';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customer.dashboard.component.html',
})
export class CustomerdashboardComponent implements OnInit {
  loading = false;
  customer: Customer;

  constructor(private router: Router,
    private customerService: CustomerService,
    private alertService: AlertService,) { }

  ngOnInit() {
      //Retrieve the customer our user is trying to edit
      this.customer = JSON.parse(localStorage.getItem('currentUser'));
  }
} 