import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginUser } from '../models/login-user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:6060/registration/api';
  private loginUrl = this.baseUrl+'/login';

  constructor() { }
  async loginUser(user : LoginUser):Promise<any>
  {
    try {
      const response = await axios.post(this.loginUrl, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
