import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {EmployeesComponent} from "./components/portal/users/users.component";
import { RegisterComponent} from "./components/register/register.component";
import {PortalComponent} from "./components/portal/portal.component";
import {ProfileComponent} from "./components/profile/profile.component";
import { AuthGuard} from "./guards/auth.guard";
import {AdminGuard} from "./guards/admin.guard";
import {PortalHomeComponent} from "./components/portal/portal-home/portal-home.component";
import {HelpComponent} from "./help/help.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'portal',
    component: PortalComponent
  },
  {
    path: 'portal-home',
    component: PortalHomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
