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
  isFirstLoad: boolean = true;
  isFinished: boolean;
  addProduct: boolean = false;
  newProduct: string;

  constructor(private router: Router,
    private customerService: CustomerService,
    private alertService: AlertService) { }

  ngOnInit() {
      this.customer = JSON.parse(localStorage.getItem('manageCustomer'));
      this.isStarted = this.customer.isStarted;
      this.isFinished = this.customer.isFinished;
      console.log(this.customer.usedProducts);
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

  showAddProduct() {
    if(this.addProduct === true)
    {
      this.addProduct = false;
    }else{
      this.addProduct = true;
    }
  }

  addNewProduct(){
    this.customer.usedProducts.push(this.newProduct);
    this.updateCustomer();
    localStorage.setItem('manageCustomer',JSON.stringify(this.customer));
    this.showAddProduct();
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
} 