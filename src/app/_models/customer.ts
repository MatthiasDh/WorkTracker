import {User} from "./user";
export class Customer {
    _id: string;
    user: User;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    isStarted: boolean;
    isFinished: boolean;
    constructor(user :User,username:string,password:string,firstname:string,lastname:string){
        this.user = user;
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastName = lastname;
    };
}