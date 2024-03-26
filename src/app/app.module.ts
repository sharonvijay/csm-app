import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeIntroComponent } from './components/home/home-intro/home-intro.component';
import { HomePlansComponent } from './components/home/home-plans/home-plans.component';
import { TeamComponent } from './components/home/team/team.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomeIntroComponent,
    HomePlansComponent,
    TeamComponent,
    FeaturesComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
