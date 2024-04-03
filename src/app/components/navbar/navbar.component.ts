import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin !: boolean; 
  loggedIn : boolean = false;
  default : boolean = true;

  constructor(private router : Router) {

    this.updateLoginStatus();
  }

  updateLoginStatus() {
    const userId = localStorage.getItem('userId');
    this.loggedIn = !!userId; 
    if (userId) {
      this.checkAdminStatus(userId);
    }
  }

  checkAdminStatus(userId: string) {
    axios.get(`http://localhost:6060/registration/api/isAdmin/${userId}`)
      .then(response => {
        this.isAdmin = response.data;
        console.log(this.isAdmin);
      })
      .catch(error => {
        console.error('Error checking admin status:', error);
      });
  }

  updateDefaultStatus()
  {
    this.default = !this.default;
  }

  logout() {
    localStorage.clear(); 
    this.updateLoginStatus(); 
    this.updateDefaultStatus();

    setTimeout(() => {
      this.router.navigate(['/']); 
    }, 1000);

  }

}
