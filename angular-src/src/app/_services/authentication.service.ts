import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

import { UserService} from "./user.service";
 
@Injectable()
export class AuthenticationService {
    authToken: any;
    user: any;
    customer: any;
    isDev:boolean;
    constructor(private http:Http,private router: Router, private userService:UserService) {
        this.isDev=false; //bij deployen
        //this.isDev=true; //bij development
    }

    login(username: string, password: string) {
        return this.http.post(this.prepEndpoint('/users/authenticate'), { username: username, password: password })
            .map((response: Response) => {
                //Login in is successvol als er een jwt token is in de response
                let user = response.json();
                if (user && user.token) {
                    //User en de token opslaan in localstorage om ingelogd te blijven
                    this.storeUserData(user.token, user);
                }
                return user;
            });
    }

    loginCustomer(username: string, password: string) {
      return this.http.post(this.prepEndpoint('/customers/authenticate'), { username: username, password: password })
          .map((response: Response) => {
              //Login in gelukt als er een jwt token is in de response
              let customer = response.json();
              if (customer && customer.token) {
                  //User en de token opslaan in local storage om ingelogd te blijven
                  this.storeUserData(customer.token, customer);
              }
              return customer;
          });
  }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }
    
      storeUserData(token, user){
        localStorage.setItem('id_token', token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
      }
    
      loadToken(){
        const token = localStorage.getItem('id_token');
        this.authToken = token;
      }
    
      loggedIn(){
        return tokenNotExpired();
      }

      prepEndpoint(ep){
        if(this.isDev){
          return 'http://localhost:4000'+ep;
        } else {
          return 'https://webapps-worktracker.herokuapp.com'+ep;
        }
      }
}