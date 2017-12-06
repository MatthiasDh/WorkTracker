import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { User } from '../_models/user';
import { Customer } from '../_models/customer';
@Injectable()
export class UserService {
    isDev:boolean;
    constructor(private http:Http) {
        this.isDev=false; //bij deployen
        //this.isDev=true; //bij development
    }

    getAll() {
        return this.http.get(this.prepEndpoint('/users')).map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get(this.prepEndpoint('/users/' + _id)).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post(this.prepEndpoint('/users/register'), user);
    }
 
    update(user: User) {
        return this.http.put(this.prepEndpoint('/users/' + user._id), user);
    }
 
    delete(_id: string) {
        return this.http.delete(this.prepEndpoint('/users/' + _id));
    }

    prepEndpoint(ep){
        if(this.isDev){
            return 'http://localhost:4000'+ep;
        } else {
          return 'https://webapps-worktracker.herokuapp.com'+ep;
        }
    }
}
