import {User} from "./user";
export class Customer {
    _id: string;
    _userId: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    isStarted: boolean;
    isFinished: boolean;
    usedProducts: string[] = [];
    todoItems: string[] =  [];
    inProgressItems: string[] =  [];
    doneItems: string[] =  [];
    
    constructor(username:string,password:string,firstname:string,lastname:string){
    };
}