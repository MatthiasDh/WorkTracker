import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
   { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
   { path: 'profile', component:ProfileComponent, canActivate: [AuthGuard]},

   //If none of the above redirect to home
   { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(appRoutes);