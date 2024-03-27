import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:6060/registration/api';
  private registrationUrl = this.baseUrl+'/addUser';

  constructor() { }

  async registerUser(user : User):Promise<any>
  {
    try {
      const response = await axios.post(this.registrationUrl, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
