webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@openClose]=\"stateExpression\" *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\" style=\"position:absolute; width:100%; top:-400%; text-align: center; z-index: 1000\">\r\n        {{message.text}}\r\n        <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse()\" style=\"position: absolute;right: 5px;top: 5px; z-index: 1\">.</div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.stateExpression = 'collapsed';
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; _this.expand(); });
    };
    AlertComponent.prototype.expand = function () {
        this.stateExpression = 'expanded';
        this.subscribeToData();
    };
    AlertComponent.prototype.collapse = function () {
        this.stateExpression = 'collapsed';
        this.timerSubscription.unsubscribe();
    };
    AlertComponent.prototype.subscribeToData = function () {
        var _this = this;
        this.timerSubscription = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].timer(3000).first().subscribe(function () { return _this.collapse(); });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/_directives/alert.component.html"),
        animations: [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('openClose', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('collapsed, void', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ top: '-100px' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('expanded', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ top: '0px' })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('collapsed => expanded', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1s ease-in-out')]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('expanded => collapsed', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('2s ease-in-out')]),
            ])],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            if (localStorage.getItem('currentUser')) {
            }
            return true;
        }
        else {
            //If the user is not logged in redirect to the loginpage.
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    //Only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    //Clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(this.prepEndpoint('/users/authenticate'), { username: username, password: password })
            .map(function (response) {
            //Login in is successvol als er een jwt token is in de response
            var user = response.json();
            if (user && user.token) {
                //User en de token opslaan in localstorage om ingelogd te blijven
                _this.storeUserData(user.token, user);
            }
            return user;
        });
    };
    AuthenticationService.prototype.loginCustomer = function (username, password) {
        var _this = this;
        return this.http.post(this.prepEndpoint('/customers/authenticate'), { username: username, password: password })
            .map(function (response) {
            //Login in gelukt als er een jwt token is in de response
            var customer = response.json();
            if (customer && customer.token) {
                //User en de token opslaan in local storage om ingelogd te blijven
                _this.storeUserData(customer.token, customer);
            }
            return customer;
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthenticationService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://webapps-worktracker.herokuapp.com' + ep;
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _c || Object])
], AuthenticationService);

var _a, _b, _c;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    CustomerService.prototype.getAllCustomersFromUser = function (_id) {
        return this.http.get(this.prepEndpoint('/customers/getcustomersfromuser/' + _id)).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.getAll = function () {
        return this.http.get(this.prepEndpoint('/customers/')).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.getById = function (_id) {
        return this.http.get(this.prepEndpoint('/customers/' + _id)).map(function (response) { return response.json(); });
    };
    CustomerService.prototype.create = function (customer) {
        return this.http.post(this.prepEndpoint('/customers/register'), customer);
    };
    CustomerService.prototype.update = function (customer) {
        return this.http.put(this.prepEndpoint('/customers/' + customer._id), customer);
    };
    CustomerService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndpoint('/customers/' + _id));
    };
    CustomerService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://webapps-worktracker.herokuapp.com' + ep;
        }
    };
    return CustomerService;
}());
CustomerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CustomerService);

var _a;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.isDev = false; //bij deployen
        //this.isDev=true; //bij development
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.prepEndpoint('/users')).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.prepEndpoint('/users/' + _id)).map(function (response) { return response.json(); });
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.prepEndpoint('/users/register'), user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.prepEndpoint('/users/' + user._id), user);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.prepEndpoint('/users/' + _id));
    };
    UserService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:4000' + ep;
        }
        else {
            return 'https://webapps-worktracker.herokuapp.com' + ep;
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<alert></alert>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_customer_service__ = __webpack_require__("../../../../../src/app/_services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_user_user_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/user/user.dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_customer_customer_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/customer/customer.dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng_drag_drop__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_20_ng_drag_drop__["NgDragDropModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__directives_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_user_user_dashboard_component__["a" /* UserdashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__dashboard_customer_customer_dashboard_component__["a" /* CustomerdashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__["a" /* ProfileComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_12__services_customer_service__["a" /* CustomerService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");







var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    //If none of the above redirect to home
    { path: '**', redirectTo: '/home' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/customer/customer.dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <script type=\"text/javascript\" src=\"../../_directives/fileModel.js\"></script>\r\n</header>\r\n\r\n<nav class=\"navbar navbar-clean\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">WorkTracker</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a [routerLink]=\"['/profile']\">MY PROFILE</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/login']\">LOGOUT</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"progress\">\r\n    <div *ngIf=\"customer.isFinished\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"100\"\r\n        aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%;background-color:green;\">\r\n        Finished\r\n    </div>\r\n    <div *ngIf=\"!customer.isStarted && !customer.isFinished\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\"\r\n        aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%;background-color:red;\">\r\n        Not started\r\n    </div>\r\n    <div *ngIf=\"customer.isStarted\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\r\n        aria-valuemax=\"100\" style=\"width:100%;background-color:orange;\">\r\n        In progress\r\n    </div>\r\n</div>\r\n<div style=\"display:flex; justify-content: center;\">\r\n    <div class=\"p-information\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <div>\r\n                    <b style=\"display:inline-block;line-height: 35.5px;\">Used Products</b>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <tr *ngFor=\"let product of customer.usedProducts\">\r\n                    <p>●\r\n                        <b>{{product}}</b>\r\n                </tr>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"c-information\">\r\n        <div class=\"panel panel-default\" style=\"margin-top:0%;\">\r\n            <div class=\"panel-heading\">\r\n                <b style=\"line-height: 35.5px;\">Customer Information</b>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>Username: {{customer.username}}</p>\r\n                <p>Firstname: {{customer.firstName}}</p>\r\n                <p>Lastname: {{customer.lastName}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"progression-tabs\">\r\n    <div class=\"task-tab\" style=\"width:31.5%;margin-right:0.5%\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3>To do</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"min-height:275px\">\r\n                <div class=\"progression-card-todo\" *ngFor=\"let item of customer.todoItems\">\r\n                    <h2>{{item}}</h2>\r\n                    <div style=\"position:absolute;top: 2px;right: 3px;\">\r\n                        <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse(item)\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"task-tab\" style=\"width:31%;margin-right:0.5%;margin-left:0.5%\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3>In progress</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"min-height:275px\">\r\n                <div class=\"progression-card-progress\" *ngFor=\"let item of customer.inProgressItems\">\r\n                    <h2>{{item}}</h2>\r\n                    <div style=\"position:absolute;top: 2px;right: 3px;\">\r\n                        <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse(item)\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"task-tab\" style=\"width:31.5%;margin-left:0.5%\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3>Done</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"min-height:275px\">\r\n                <div class=\"progression-card-done\" *ngFor=\"let item of customer.doneItems\">\r\n                    <h2>{{item}}</h2>\r\n                    <div style=\"position:absolute;top: 2px;right: 3px;\">\r\n                        <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse(item)\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/customer/customer.dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/_services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerdashboardComponent = (function () {
    function CustomerdashboardComponent(router, customerService, alertService) {
        this.router = router;
        this.customerService = customerService;
        this.alertService = alertService;
        this.loading = false;
    }
    CustomerdashboardComponent.prototype.ngOnInit = function () {
        //Retrieve the customer our user is trying to edit
        this.customer = JSON.parse(localStorage.getItem('currentUser'));
    };
    return CustomerdashboardComponent;
}());
CustomerdashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-customerdashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/customer/customer.dashboard.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], CustomerdashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=customer.dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"content\">\r\n    <div *ngIf='showCustomer'><app-customerdashboard></app-customerdashboard></div>\r\n    <div *ngIf='showUser'><app-userdashboard></app-userdashboard></div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //Check if it is a customer that logged in
        if (JSON.parse(localStorage.getItem('isCustomer'))) {
            this.showCustomerDashboard();
        }
        else {
            this.showUserDashboard();
        }
    };
    DashboardComponent.prototype.showCustomerDashboard = function () {
        this.showUser = false;
        this.showCustomer = true;
    };
    DashboardComponent.prototype.showUserDashboard = function () {
        this.showCustomer = false;
        this.showUser = true;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <script type=\"text/javascript\" src=\"../../_directives/fileModel.js\"></script>\r\n</header>\r\n\r\n<nav class=\"navbar navbar-clean\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">WorkTracker</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a [routerLink]=\"['/profile']\">MY PROFILE</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/login']\">LOGOUT</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"status\">\r\n    <div *ngIf=\"!customer.isStarted && !customer.isFinished\">\r\n        <input (click)=\"notStarted()\" type=\"radio\" name=\"gender\" value=\"Not Started\" checked> Not Started\r\n        <input (click)=\"inProgress()\" type=\"radio\" name=\"gender\" value=\"In Progress\"> In Progress\r\n        <input (click)=\"finished()\" type=\"radio\" name=\"gender\" value=\"Finished\"> Finished\r\n    </div>\r\n    <div *ngIf=\"customer.isStarted && !customer.isFinished\">\r\n        <input (click)=\"notStarted()\" type=\"radio\" name=\"gender\" value=\"Not Started\"> Not Started\r\n        <input (click)=\"inProgress()\" type=\"radio\" name=\"gender\" value=\"In Progress\" checked> In Progress\r\n        <input (click)=\"finished()\" type=\"radio\" name=\"gender\" value=\"Finished\"> Finished\r\n    </div>\r\n    <div *ngIf=\"customer.isFinished\">\r\n        <input (click)=\"notStarted()\" type=\"radio\" name=\"gender\" value=\"Not Started\"> Not Started\r\n        <input (click)=\"inProgress()\" type=\"radio\" name=\"gender\" value=\"In Progress\"> In Progress\r\n        <input (click)=\"finished()\" type=\"radio\" name=\"gender\" value=\"Finished\" checked> Finished\r\n    </div>\r\n</div>\r\n\r\n<div class=\"progress\">\r\n    <div *ngIf=\"customer.isFinished\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"100\"\r\n        aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%;background-color:green;\">\r\n        Finished\r\n    </div>\r\n    <div *ngIf=\"!customer.isStarted && !customer.isFinished\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\"\r\n        aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%;background-color:red;\">\r\n        Not started\r\n    </div>\r\n    <div *ngIf=\"customer.isStarted\" class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\r\n        aria-valuemax=\"100\" style=\"width:100%;background-color:orange;\">\r\n        In progress\r\n    </div>\r\n</div>\r\n<div style=\"display:flex; justify-content: center;\">\r\n    <div class=\"p-information\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <div>\r\n                    <b style=\"display:inline-block;line-height: 35.5px;\">Used Products</b>\r\n                    <div class=\"col-xs-3\" style=\"float:none;display:inline-block;\">\r\n                        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newProduct\" name=\"product\" #product=\"ngModel\">\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-success\" style=\"display:inline-block;\" (click)=\"addNewProduct()\">Add product</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <tr *ngFor=\"let product of customer.usedProducts\">\r\n                    <p>\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteProduct(product)\">Delete product</button> ●\r\n                         <b>{{product}}</b>\r\n                </tr>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"c-information\">\r\n        <div class=\"panel panel-default\" style=\"margin-top:0%;\">\r\n            <div class=\"panel-heading\">\r\n                <b style=\"line-height: 35.5px;\">Customer Information</b>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <p>Username: {{customer.username}}</p>\r\n                <p>Firstname: {{customer.firstName}}</p>\r\n                <p>Lastname: {{customer.lastName}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"progression-tabs\">\r\n    <div class=\"task-tab\" style=\"width:31.5%;margin-right:0.5%\" droppable (onDrop)=\"onTodoDrop($event)\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3>To do</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"min-height:275px\">\r\n                <div class=\"newItem\">\r\n                    <textarea class=\"form-control\" rows=\"3\" #todoModel cols=\"200\" style=\"width:100%; height:auto; resize: none;\"></textarea>\r\n                    <input class=\"btn btn-success\" type=\"button\" style=\"margin-top:5px;margin-bottom: 10px;width:100%; box-sizing: border-box;\"\r\n                        (click)=\"addItem(todoModel.value)\" value=\"Add item\">\r\n                </div>\r\n                <div class=\"progression-card-todo\" *ngFor=\"let item of customer.todoItems\" draggable [dragData]=\"item\">\r\n                    <h2>{{item}}</h2>\r\n                    <div style=\"position:absolute;top: 2px;right: 3px;\">\r\n                        <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse(item)\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"task-tab\" style=\"width:31%;margin-right:0.5%;margin-left:0.5%\" droppable (onDrop)=\"onInProgressDrop($event)\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3>In progress</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"min-height:275px\">\r\n                <div class=\"progression-card-progress\" *ngFor=\"let item of customer.inProgressItems\" draggable [dragData]=\"item\">\r\n                    <h2>{{item}}</h2>\r\n                    <div style=\"position:absolute;top: 2px;right: 3px;\">\r\n                            <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse(item)\"></div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"task-tab\" style=\"width:31.5%;margin-left:0.5%\" droppable (onDrop)=\"onDoneDrop($event)\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                <h3>Done</h3>\r\n            </div>\r\n            <div class=\"panel-body\" style=\"min-height:275px\">\r\n                <div class=\"progression-card-done\" *ngFor=\"let item of customer.doneItems\" draggable [dragData]=\"item\">\r\n                    <h2>{{item}}</h2>\r\n                    <div style=\"position:absolute;top: 2px;right: 3px;\">\r\n                            <div class=\"glyphicon glyphicon-remove\" (click)=\"collapse(item)\"></div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/user/user.dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_customer_service__ = __webpack_require__("../../../../../src/app/_services/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserdashboardComponent = (function () {
    function UserdashboardComponent(router, customerService, alertService) {
        this.router = router;
        this.customerService = customerService;
        this.alertService = alertService;
        this.loading = false;
        this.addProduct = false;
    }
    UserdashboardComponent.prototype.ngOnInit = function () {
        //Retrieve the customer our user is trying to edit
        this.customer = JSON.parse(localStorage.getItem('manageCustomer'));
    };
    UserdashboardComponent.prototype.notStarted = function () {
        this.customer.isStarted = false;
        this.customer.isFinished = false;
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.finished = function () {
        this.customer.isStarted = false;
        this.customer.isFinished = true;
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.inProgress = function () {
        this.customer.isStarted = true;
        this.customer.isFinished = false;
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.addNewProduct = function () {
        this.customer.usedProducts.push(this.newProduct);
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.deleteProduct = function (product) {
        this.removeItem(product, this.customer.usedProducts);
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.updateCustomer = function () {
        var _this = this;
        localStorage.setItem('manageCustomer', JSON.stringify(this.customer));
        this.loading = true;
        this.customerService.update(this.customer)
            .subscribe(function (data) {
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    UserdashboardComponent.prototype.removeItem = function (item, list) {
        if (list != undefined) {
            var index = list.map(function (e) {
                return e;
            }).indexOf(item);
            if (index != -1)
                list.splice(index, 1);
        }
    };
    //Drag and drop
    UserdashboardComponent.prototype.onTodoDrop = function (item) {
        if (this.customer.todoItems == undefined) {
            this.customer.todoItems = [];
        }
        this.removeItem(item.dragData, this.customer.todoItems);
        this.removeItem(item.dragData, this.customer.inProgressItems);
        this.removeItem(item.dragData, this.customer.doneItems);
        this.customer.todoItems.push(item.dragData);
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.onInProgressDrop = function (item) {
        if (this.customer.inProgressItems == undefined) {
            this.customer.inProgressItems = [];
        }
        this.removeItem(item.dragData, this.customer.todoItems);
        this.removeItem(item.dragData, this.customer.inProgressItems);
        this.removeItem(item.dragData, this.customer.doneItems);
        this.customer.inProgressItems.push(item.dragData);
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.onDoneDrop = function (item) {
        if (this.customer.doneItems == undefined) {
            this.customer.doneItems = [];
        }
        this.removeItem(item.dragData, this.customer.todoItems);
        this.removeItem(item.dragData, this.customer.inProgressItems);
        this.removeItem(item.dragData, this.customer.doneItems);
        this.customer.doneItems.push(item.dragData);
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.addItem = function (text) {
        if (this.customer.todoItems == undefined) {
            this.customer.todoItems = [];
            this.updateCustomer();
        }
        this.customer.todoItems.push(text);
        this.updateCustomer();
    };
    UserdashboardComponent.prototype.collapse = function (item) {
        this.removeItem(item, this.customer.todoItems);
        this.removeItem(item, this.customer.inProgressItems);
        this.removeItem(item, this.customer.doneItems);
        this.updateCustomer();
    };
    return UserdashboardComponent;
}());
UserdashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userdashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/user/user.dashboard.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_customer_service__["a" /* CustomerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], UserdashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=user.dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css\" rel='stylesheet' type='text/css'>\r\n\r\n<nav class=\"navbar navbar-clean\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">WorkTracker</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a [routerLink]=\"['/profile']\">MY PROFILE</a></li>\r\n                <li><a [routerLink]=\"['/login']\">LOGOUT</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 col-md-offset-1\">\r\n            <div class=\"panel panel-default panel-table\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col col-xs-6\">\r\n                            <h3 class=\"panel-title\">Hi <b>{{currentUser.firstName}}</b>! You are currently working for:</h3>\r\n                        </div>\r\n                        <div class=\"col col-xs-6 text-right\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-primary btn-create\" (click)=\"createNewCustomer()\">Create new customer</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <table class=\"table table-striped table-bordered table-list\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th><em class=\"fa fa-cog\"></em></th>\r\n                                <th class=\"hidden-xs\">Username</th>\r\n                                <th>Firstname</th>\r\n                                <th>Lastname</th>\r\n                                <th>Current progress</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let customer of customers\">\r\n                                <td align=\"center\">\r\n                                    <a class=\"btn btn-default\" (click)=\"editCustomer(customer._id)\"><em class=\"fa fa-pencil\"></em></a>\r\n                                    <a class=\"btn btn-danger\" (click)=\"deleteCustomer(customer._id)\"><em class=\"fa fa-trash\"></em></a>\r\n                                </td>\r\n\r\n                                <td class=\"pointer\" (click)=\"manageCustomer(customer._id)\">{{customer.username}}</td>\r\n                                <td>{{customer.firstName}}</td>\r\n                                <td>{{customer.lastName}}</td>\r\n                                \r\n                                <td *ngIf=\"!customer.isStarted && !customer.isFinished\">\r\n                                    Your work has not been started.\r\n                                </td>\r\n                                <td *ngIf=\"customer.isStarted && !customer.isFinished\">\r\n                                    You are still working.\r\n                                </td>\r\n                                <td *ngIf=\"customer.isFinished\">\r\n                                    Your work has been finished.\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_service__ = __webpack_require__("../../../../../src/app/_services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(userService, customerService, router) {
        this.userService = userService;
        this.customerService = customerService;
        this.router = router;
        this.customers = [];
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('isCustomer'))) {
            //If the user logged in is a customer then redirect to the dashboard
            this.router.navigate(['/dashboard']);
        }
        else {
            this.loadAllCustomersOfCurrentUser();
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    HomeComponent.prototype.deleteCustomer = function (_id) {
        var _this = this;
        this.customerService.delete(_id).subscribe(function () { _this.loadAllCustomersOfCurrentUser(); });
    };
    HomeComponent.prototype.editCustomer = function (_id) {
        var _this = this;
        localStorage.setItem('isEdit', JSON.stringify(true));
        this.customerService.getById(_id).subscribe(function (data) {
            localStorage.setItem('editCustomer', JSON.stringify(data));
            _this.router.navigate(['/register']);
        });
    };
    HomeComponent.prototype.manageCustomer = function (_id) {
        var _this = this;
        this.customerService.getById(_id).subscribe(function (data) {
            localStorage.setItem('manageCustomer', JSON.stringify(data));
            _this.router.navigate(['/dashboard']);
        });
    };
    HomeComponent.prototype.createNewCustomer = function () {
        localStorage.setItem('isEdit', JSON.stringify(false));
        this.router.navigate(['/register']);
    };
    HomeComponent.prototype.loadAllCustomersOfCurrentUser = function () {
        var _this = this;
        this.customerService.getAllCustomersFromUser(this.currentUser._id).subscribe(function (customers) { _this.customers = customers; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:-50px;visibility:hidden\">This message is not shown.</div>\r\n<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h1 class=\"text-center\">WorkTracker</h1>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                    <input type=\"text\" class=\"form-control input-lg\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required placeholder=\"Username\" />\r\n                    <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                    <input type=\"password\" class=\"form-control input-lg\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required placeholder=\"Password\" />\r\n                    <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <input [disabled]=\"loading\" type=\"submit\" class=\"btn btn-block btn-lg btn-primary\" value=\"Login\" />\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //Reset login status
        this.authenticationService.logout();
        //Get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var succes = false;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.alertService.success("You have succesfully logged in.", true);
            _this.router.navigate([_this.returnUrl]);
            localStorage.setItem('isCustomer', JSON.stringify(false));
        }, function (error) {
            _this.authenticationService.loginCustomer(_this.model.username, _this.model.password)
                .subscribe(function (data) {
                _this.router.navigate(['/dashboard']);
                localStorage.setItem('isCustomer', JSON.stringify(true));
            }, function (error) {
                _this.alertService.error("The current user does not exist.");
                _this.loading = false;
            });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-clean\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">WorkTracker</a>\r\n        </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <a>MY PROFILE</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['/login']\">LOGOUT</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-10 col-md-offset-1\">\r\n            <div class=\"panel panel-default panel-table\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                            <h2 align=\"center\"><b>Profile information</b></h2>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <table class=\"table table-striped table-bordered table-list\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Username</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr align=\"center\">\r\n                                <td>{{user.username}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <thead>\r\n                            <tr>\r\n                                <th>Firstname</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr align=\"center\">\r\n                                <td>{{user.firstName}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <thead>\r\n                            <tr >\r\n                                <th>Lastname</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr align=\"center\">\r\n                                <td>{{user.lastName}}</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(route, router) {
        this.route = route;
        this.router = router;
        this.model = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-clean\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<a class=\"navbar-brand\" [routerLink]=\"['/home']\">WorkTracker</a>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t<li><a href=\"#\">MY PROFILE</a></li>\r\n\t\t\t\t<li><a [routerLink]=\"['/login']\">LOGOUT</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n\t<div class=\"row main\">\r\n\t\t<div class=\"main-login main-center\">\r\n\t\t\t<h3 *ngIf=\"!isEdit\">Register a new customer!</h3>\r\n\t\t\t<h3 *ngIf=\"isEdit\">Update customer</h3>\r\n\r\n\t\t\t<form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstName.valid }\">\r\n\t\t\t\t\t<label for=\"firstName\" class=\"cols-sm-2 control-label\">Firstname</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon glyphicon glyphicon-user\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"Enter customer's firstname\" [(ngModel)]=\"model.firstName\"\r\n\t\t\t\t\t\t\t #firstName=\"ngModel\" required pattern=\"[a-zA-Z]*\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Firstname is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastName.valid }\">\r\n\t\t\t\t\t<label for=\"lastName\" class=\"cols-sm-2 control-label\">Lastname</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon glyphicon glyphicon-user\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"lastName\" id=\"lastName\" placeholder=\"Enter customer's lastname\" [(ngModel)]=\"model.lastName\"\r\n\t\t\t\t\t\t\t #lastName=\"ngModel\" required pattern=\"[a-zA-Z]*\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Firstname is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon glyphicon glyphicon-user\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Enter customer's username\" [(ngModel)]=\"model.username\"\r\n\t\t\t\t\t\t\t #username=\"ngModel\" required pattern=\"[a-zA-Z]*\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div *ngIf=\"!isEdit\" class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon glyphicon glyphicon-lock\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Enter customer's Password\" [(ngModel)]=\"model.password\"\r\n\t\t\t\t\t\t\t #password=\"ngModel\" required/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input *ngIf=\"!isEdit\" [disabled]=\"loading\" type=\"submit\" class=\"btn btn-block btn-lg btn-primary\" value=\"Register\" />\r\n\t\t\t\t\t<input *ngIf=\"isEdit\" [disabled]=\"loading\" type=\"submit\" (click)=\"update()\" class=\"btn btn-block btn-lg btn-primary\" value=\"Update customer\" />\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customer_service__ = __webpack_require__("../../../../../src/app/_services/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, customerService, alertService) {
        this.router = router;
        this.customerService = customerService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('isCustomer'))) {
            //If the user logged in is a customer then redirect to the dashboard
            this.router.navigate(['/dashboard']);
        }
        else {
            this.isEdit = JSON.parse(localStorage.getItem('isEdit'));
            if (localStorage.getItem('editCustomer') != null && this.isEdit == true) {
                this.isEdit = true;
                this.model = JSON.parse(localStorage.getItem('editCustomer'));
            }
        }
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model._userId = this.currentUser._id;
        this.model.isStarted = false;
        this.model.isFinished = false;
        this.model.usedProducts = [];
        this.model.todoItems = [];
        this.model.inProgressItems = [];
        this.model.doneItems = [];
        this.customerService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successfull.', true);
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.alertService.error("Please enter valid information.");
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.update = function () {
        var _this = this;
        this.loading = true;
        this.customerService.update(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Update successfull.', true);
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.alertService.error("Could not update the user.");
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/register/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_customer_service__["a" /* CustomerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map