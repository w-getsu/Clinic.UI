import { Routes } from '@angular/router';
import { LoginComponent } from './components/identity-component/login/login.component';
import { RegisterComponent } from './components/identity-component/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';

import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { DoctorComponent } from './components/pages/doctor/doctor.component';
import { adminGuard,clinicGuard,expireGuard } from './guards/clinic.guard';
import { DashboardComponent } from './components/admin-panel/dashboard/dashboard.component';

export const routes: Routes = [
    {path : 'login', component : LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'home',component:HomeComponent, canActivate:[clinicGuard, expireGuard]},
    {path: 'doctor', component: DoctorComponent, canActivate:[clinicGuard, expireGuard]},
    {path:'dashboard',component:DashboardComponent, canActivate: [clinicGuard,clinicGuard,adminGuard]},
    {path:  '',component:HomeComponent},
    {path:'**',component:NotFoundComponent}
];
