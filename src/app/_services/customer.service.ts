import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { Customer } from '../_models/customer';
import { User } from '../_models/user';
@Injectable()
export class CustomerService {
    constructor(private http: Http) { }
 
    getAll(_currentUserId: string) {
        return this.http.get('/customers/').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/customers/' + _id).map((response: Response) => response.json());
    }
 
    create(customer: Customer) {
        return this.http.post('/customers/register', customer);
    }
 
    update(customer: Customer) {
        return this.http.put('/customers/' + customer._id, customer);
    }
 
    delete(_id: string) {
        return this.http.delete('/customers/' + _id);
    }
}
