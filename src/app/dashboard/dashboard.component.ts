import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  showCustomer : boolean;
  showUser: boolean;

  constructor() { }

  ngOnInit() {
    this.showUserDashboard();
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
