import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  showCustomer : boolean;
  showUser: boolean;
  currentUser: any;

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //Check if it is a customer that logged in
    if(JSON.parse(localStorage.getItem('isCustomer'))){
    this.showCustomerDashboard();
    }else{
    this.showUserDashboard();
    }
  }


  showCustomerDashboard(){
    this.showUser = false;
    this.showCustomer = true;
  }

  showUserDashboard(){
    this.showCustomer = false;
    this.showUser = true;
  }

}
