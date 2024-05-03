import { Routes } from '@angular/router';
import { LoginComponent } from './components/identity-component/login/login.component';
import { RegisterComponent } from './components/identity-component/register/register.component';
import { HomeComponent } from './components/pages/home/home.component';

import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { DoctorComponent } from './components/pages/doctor/doctor.component';
import { adminGuard,clinicGuard,expireGuard } from './guards/clinic.guard';
import { DashboardComponent } from './components/admin-panel/dashboard/dashboard.component';
import { SpecialistsComponent } from './components/pages/specialists/specialists.component';
import { SkillsComponent } from './components/admin-panel/skills/skills.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { AboutComponent } from './components/pages/about/about.component';

export const routes: Routes = [
    {path : 'login', component : LoginComponent},
    {path: 'register', component : RegisterComponent},
    {path: 'home',component:HomeComponent},
    {path: 'doctor', component: DoctorComponent},
    {path: 'dashboard',component: DashboardComponent},
    {path: 'service', component:ServiceComponent},
    {path: 'services',component:ServicesComponent},
    {path:'pricing',component:PricingComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'contact',component:ContactsComponent},
    {path:'about',component:AboutComponent},

    {path: 'dashboard',
        children: [
            {path: 'skills', component:SkillsComponent}
        ]},
    {path: 'specialists',component:SpecialistsComponent},
    {path:'',component:HomeComponent},
    {path:'**',component:NotFoundComponent}
];
