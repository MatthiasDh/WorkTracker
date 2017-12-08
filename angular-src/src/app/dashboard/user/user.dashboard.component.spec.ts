import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { AlertComponent } from '../../_directives/alert.component';
import { routing } from '../../app.routing';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PushNotificationsModule } from 'angular2-notifications';
import { NgDragDropModule } from 'ng-drag-drop';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuard } from '../../_guards/auth.guard';
import { AlertService } from '../../_services/alert.service';
import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';
import { DashboardComponent} from '../../dashboard/dashboard.component';
import { UserdashboardComponent} from '../../dashboard/user/user.dashboard.component';
import { CustomerdashboardComponent} from '../../dashboard/customer/customer.dashboard.component';
import { ProfileComponent} from '../../profile/profile.component';
import { CustomerService} from '../../_services/customer.service';
import { Customer} from '../../_models/customer';

describe('UserdashboardComponent', () => {
    let uDashComp : UserdashboardComponent;
    let fixture : ComponentFixture <UserdashboardComponent>;
    let customer : Customer = new Customer("testuser","testpassword","testfirstname","testlastname");

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        UserdashboardComponent,
        CustomerdashboardComponent,
        ProfileComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        BrowserAnimationsModule,
        NgDragDropModule.forRoot(),
      ],
      providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        CustomerService,
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(UserdashboardComponent);
    uDashComp = fixture.componentInstance;
    uDashComp.customer = customer;
    let customerService = fixture.debugElement.injector.get(CustomerService);
    let spy = spyOn(customerService,'update').and.returnValue(fakeSubscribe(0,0));
  }));

  it('Should create the user dashboard', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Changing status to isFinished should change the customers status',(() => {
    uDashComp.finished();
    fixture.detectChanges();
    expect(uDashComp.customer.isFinished).toEqual(true);
  }));

  it('Changing status to inProgress should change the customers status',(() => {
    uDashComp.inProgress();
    fixture.detectChanges();
    expect(uDashComp.customer.isStarted).toEqual(true);
    expect(uDashComp.customer.isFinished).toEqual(false);
  }));

  it('Changing status to isStarted should change the customers status',(() => {
    uDashComp.notStarted();
    fixture.detectChanges();
    expect(uDashComp.customer.isStarted).toEqual(false);
  }));

  it('Adding a product to the usedProducts list of the customer should add a product',(() => {
    //At this point the length of the usedProducts should be 0
    //Add new product so the length should increase
    uDashComp.newProduct = "newproduct";
    
    //Length of the usedProducts should be 1
    uDashComp.addNewProduct();
    fixture.detectChanges();
    expect(uDashComp.customer.usedProducts.length).toEqual(1);
  }));

  it('Removing a product to the usedProducts list of the customer should remove a product',(() => {
    //usedProducts.length should be 1 because we added a product in the unittest before
    uDashComp.deleteProduct("newproduct");
    fixture.detectChanges();
    var endingSize = uDashComp.customer.usedProducts.length;
    expect(uDashComp.customer.usedProducts.length).toEqual(0);
  }));
});

function fakeSubscribe(returnValue,errorValue) {
    return {
      subscribe:function(callback){
        callback(returnValue);
      }
    }
  }