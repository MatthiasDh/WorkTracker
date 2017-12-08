import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  showCustomer : boolean;
  showUser: boolean;
  currentUser: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //Check if it is a customer that logged in, if so show the customerdashboard
    if(JSON.parse(localStorage.getItem('isCustomer'))){
      this.showCustomerDashboard();
    }else{
      //If it is not a customer that logged in show the user/admin dashboard
      if(JSON.parse(localStorage.getItem('manageCustomer')) == null){
        this.router.navigate(['/home']);
      }else{
        this.showUserDashboard();
      }
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
