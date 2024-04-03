import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginUser } from '../models/login-user.model';
import { LoginAdmin } from '../models/login-admin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:6060/registration/api';
  private loginUserUrl = this.baseUrl+'/loginUser';
  private loginAdminUrl = this.baseUrl+'/loginAdmin';

  constructor() { }
  async loginUser(user : LoginUser):Promise<any>
  {
    try {
      const response = await axios.post(this.loginUserUrl, user);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async loginAdmin(admin : LoginAdmin):Promise<any>
  {
    try{
      const response = await axios.post(this.loginAdminUrl,admin);
      return response.data;
    }
    catch(error)
    {
      throw error;
    }
  }
}
