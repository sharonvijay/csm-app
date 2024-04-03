import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    phoneNo: 0
  };  
  constructor(private registrationService : RegistrationService,private router : Router){}

  async registerUser(form : NgForm) {
    if(form.valid)
    {
      try {
        this.user.id = Math.random()*10;
        const response = await this.registrationService.registerUser(this.user);
        console.log('Registration Successful', response);

        if (response && response.id) {
          localStorage.clear();
          localStorage.setItem('userId', response.id);
          localStorage.setItem('userName', response.name);
          localStorage.setItem('userEmail', response.email);
          localStorage.setItem('userPhoneNo', response.phoneNo);
          window.dispatchEvent(new Event('User Registered'));
          
          console.log('Registration successful. User details stored in localStorage:', response);
          console.log(localStorage);
  
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        } else {
          console.error('Registration failed. User data not found in the response.');
        }}
        catch (error) {
        console.error('Registration failed', error);
        // Handle registration error (e.g., display error message)
      }
    }
  }
}
