import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn : boolean = false;
  default : boolean = true;

  constructor(private router : Router) {
    this.updateLoginStatus();
  }

  updateLoginStatus() {
    const userId = localStorage.getItem('userId');
    this.loggedIn = !!userId; // Update loggedIn based on userId presence
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
