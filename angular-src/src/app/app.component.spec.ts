import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/alert.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PushNotificationsModule } from 'angular2-notifications';
import { NgDragDropModule } from 'ng-drag-drop';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UserdashboardComponent} from './dashboard/user/user.dashboard.component';
import { CustomerdashboardComponent} from './dashboard/customer/customer.dashboard.component';
import { ProfileComponent} from './profile/profile.component';

describe('AppComponent', () => {
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
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));

  it('Should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Should render an alert tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('alert'));
  }));

  it('Should render an router-outlet tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet'));
  }));
});