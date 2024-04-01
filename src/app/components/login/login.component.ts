import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user.model';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: LoginUser = {
    email: '',
    password: '',
  };  

  constructor(private loginService: LoginService, private router: Router) {}

  async loginUser(form: NgForm) {
    try {
      const response = await this.loginService.loginUser(this.user);
      console.log(response);

      if (response && response.id) {
        localStorage.clear();
        localStorage.setItem('userId', response.id);
        localStorage.setItem('userName', response.name);
        localStorage.setItem('userEmail', response.email);
        localStorage.setItem('userPhoneNo', response.phoneNo);
        window.dispatchEvent(new Event('userLoggedIn'));
        
        console.log('Login successful. User details stored in localStorage:', response);
        console.log(localStorage);

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      } else {
        console.error('Login failed. User data not found in the response.');
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  }
}
