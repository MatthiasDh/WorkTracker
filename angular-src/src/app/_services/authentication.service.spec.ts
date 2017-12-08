import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend,
} from '@angular/http';

import { MockBackend } from '@angular/http/testing';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import { NgxPermissionsModule } from 'ngx-permissions';

describe("AuthService: login and logout functionality", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule,
                NgxPermissionsModule.forRoot(),
            ],
            providers: [
              AuthenticationService,
              UserService,
              { provide: XHRBackend, useClass: MockBackend },
            ]
          })
    });

     it("Wrong login should not save the user and its token in the localStorage", inject([AuthenticationService, XHRBackend], (authService, mockBackend) => {
        let response = {
            "email" : "testemail@gmail.com",
            "password" : "testpassword",
        };
        //Returns fake response
        mockBackend.connections.subscribe(connection => {
            connection.mockRespond(new Response( <ResponseOptions> {
                body: JSON.stringify(response)
            }));
        });

        //Clear the localstorage
        localStorage.clear();
        authService.login("testemail@gmail.com","testpassword").subscribe(
            data => {
                expect(localStorage.length).toBe(0);
            }
        );
    })); 
    it("Login should save the user and it's token in localStorage", inject([AuthenticationService, XHRBackend], (authService, mockBackend) => {
        let response = {
            email : "testemail@gmail.com",
            password : "testpassword",
            token: "thisisatesttoken",
        };

        //Returns fake response
        mockBackend.connections.subscribe(connection => {
            connection.mockRespond(new Response( <ResponseOptions> {
                body: JSON.stringify(response)
            }));
        });

        //Clear the localstorage
        localStorage.clear();
        authService.login("testemail@gmail.com","testpassword").subscribe(
            data => {
                expect(localStorage.length).toBe(2);
                expect(JSON.parse(localStorage.getItem("currentUser"))).toEqual(response);
                localStorage.clear();
            }
        );
    })); 

     it("Logout should clear the localStorage", inject([AuthenticationService, XHRBackend], (authService, mockBackend) => {
        let fakeUser = {
            email : "testemail@gmail.com",
            password : "testpassword",
            token: "thisisatesttoken",
        };

        //Clear the localStorage first and set a new item afterwards
        localStorage.clear();
        localStorage.setItem('currentUser', JSON.stringify(fakeUser));
        authService.logout();

        expect(localStorage.length).toBe(0);
    }));
})