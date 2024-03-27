import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user : User={
    id:1,
    name: 'testuser',
    email: 'testuser@example.com',
    password: 'password123',
    phoneNo:9381217572
  };

  constructor(private registrationService : RegistrationService){}

  async registerUser() {
    try {
      const result = await this.registrationService.registerUser(this.user);
      console.log('Registration successful', result);
      // Handle successful registration (e.g., navigate to a login page or display success message)
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration error (e.g., display error message)
    }
  }
}
