import { Component, OnInit } from '@angular/core';
import { Customer } from "../../_models/customer";
import { CustomerService } from '../../_services/customer.service';
import { AlertService } from '../../_services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './user.dashboard.component.html',
})
export class UserdashboardComponent implements OnInit {
  loading = false;
  customer: Customer;
  isStarted: boolean;
  isFinished: boolean;
  addProduct: boolean = false;
  newProduct: string;

  constructor(private router: Router,
    private customerService: CustomerService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem('manageCustomer'));
  }

  notStarted() {
    this.customer.isStarted = false;
    this.customer.isFinished = false;
    this.updateCustomer();
  }

  finished() {
    this.customer.isStarted = false;
    this.customer.isFinished = true;
    this.updateCustomer();
  }

  inProgress() {
    this.customer.isStarted = true;
    this.customer.isFinished = false;
    this.updateCustomer();
  }

  addNewProduct() {
    this.customer.usedProducts.push(this.newProduct);
    this.updateCustomer();
  }

  deleteProduct(product: String) {
    this.removeItem(product,this.customer.usedProducts);
    this.updateCustomer();
  }

  updateCustomer() {
    this.loading = true;
    this.customerService.update(this.customer)
      .subscribe(data => {
        this.alertService.success('Update successful', true);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  removeItem(item: String, list: Array<any>) {
    let index = list.map(function (e) {
      return e
    }).indexOf(item); if (index != -1) list.splice(index, 1);
  }
} 