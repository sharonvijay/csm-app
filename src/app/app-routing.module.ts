import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RaiseIssueComponent } from './components/raise-issue/raise-issue.component';
import { StatusComponent } from './components/status/status.component';
import { ResolveIssueComponent } from './components/resolve-issue/resolve-issue.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path:'raise-issue',component:RaiseIssueComponent},
  { path:'resolve-issue',component:ResolveIssueComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'status',component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
