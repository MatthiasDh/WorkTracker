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
  addProduct: boolean = false;
  newProduct: string;

  constructor(private router: Router,
    private customerService: CustomerService,
    private alertService: AlertService, ) { }

  ngOnInit() {
    //Retrieve the customer our user is trying to edit
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
    this.removeItem(product, this.customer.usedProducts);
    this.updateCustomer();
  }

  updateCustomer() {
    localStorage.setItem('manageCustomer', JSON.stringify(this.customer));
    this.loading = true;
    this.customerService.update(this.customer)
      .subscribe(data => {
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  removeItem(item: String, list: Array<any>) {
    if(list != undefined){
    let index = list.map(function (e) {
      return e
    }).indexOf(item); if (index != -1) list.splice(index, 1);
  }
  }

  //Drag and drop
  onTodoDrop(item: any) {
    if(this.customer.todoItems == undefined)
    {
      this.customer.todoItems = [];
    }
    this.removeItem(item.dragData,this.customer.todoItems);
    this.removeItem(item.dragData,this.customer.inProgressItems);
    this.removeItem(item.dragData,this.customer.doneItems);
    this.customer.todoItems.push(item.dragData);
    this.updateCustomer();
  }

  onInProgressDrop(item: any) {
    if(this.customer.inProgressItems == undefined)
    {
      this.customer.inProgressItems = [];
    }
    this.removeItem(item.dragData,this.customer.todoItems);
    this.removeItem(item.dragData,this.customer.inProgressItems);
    this.removeItem(item.dragData,this.customer.doneItems);
    this.customer.inProgressItems.push(item.dragData);
    this.updateCustomer();
  }

  onDoneDrop(item: any) {
    if(this.customer.doneItems == undefined)
    {
      this.customer.doneItems = [];
    }
    this.removeItem(item.dragData,this.customer.todoItems);
    this.removeItem(item.dragData,this.customer.inProgressItems);
    this.removeItem(item.dragData,this.customer.doneItems);
    this.customer.doneItems.push(item.dragData);
    this.updateCustomer();
  }

  addItem(text:string)
  {
    if(this.customer.todoItems == undefined)
    {
      this.customer.todoItems = [];
      this.updateCustomer();
    }
    this.customer.todoItems.push(text);
    this.updateCustomer();
  }

  collapse(item: any)
  {
    this.removeItem(item,this.customer.todoItems);
    this.removeItem(item,this.customer.inProgressItems);
    this.removeItem(item,this.customer.doneItems);
    this.updateCustomer();
  }
} 