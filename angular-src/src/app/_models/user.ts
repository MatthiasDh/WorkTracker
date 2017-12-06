export class User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    roles: string[];
    
    constructor(username:string,password:string,firstname:string,lastname:string){
        this.username = username;
        this.password = password;
        this.firstName = firstname;
        this.lastName = lastname;
    };
}