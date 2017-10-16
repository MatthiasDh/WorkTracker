import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { routing } from './app.routing';
 
import { customHttpProvider } from './_helpers/custom-http';
import { AlertComponent } from './_directives/alert.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { CustomerService } from './_services/customer.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserdashboardComponent} from './dashboard/user/user.dashboard.component'
import { CustomerdashboardComponent} from './dashboard/customer/customer.dashboard.component'
 
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        UserdashboardComponent,
        CustomerdashboardComponent
    ],
    providers: [
        customHttpProvider,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CustomerService
    ],
    bootstrap: [AppComponent]
})
 
export class AppModule { }