import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { Customer } from '../_models/customer';
import { User } from '../_models/user';
@Injectable()
export class CustomerService {
    isDev:boolean;
    constructor(private http:Http) {
        this.isDev=false; //bij deployen
        //this.isDev=true; //bij development
    }
 
    getAll(_currentUserId: string) {
        return this.http.get(this.prepEndpoint('/customers/')).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.prepEndpoint('/customers/' + _id)).map((response: Response) => response.json());
    }
 
    create(customer: Customer) {
        return this.http.post(this.prepEndpoint('/customers/register'), customer);
    }
 
    update(customer: Customer) {
        return this.http.put(this.prepEndpoint('/customers/' + customer._id), customer);
    }
 
    delete(_id: string) {
        return this.http.delete(this.prepEndpoint('/customers/' + _id));
    }

    prepEndpoint(ep){
        if(this.isDev){
            return 'http://localhost:4000'+ep;
        } else {
          return 'https://webapps-worktracker.herokuapp.com/'+ep;
        }
    }
}
