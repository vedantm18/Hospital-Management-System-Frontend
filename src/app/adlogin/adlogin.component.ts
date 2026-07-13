import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent {

  username: string = '';
  password: string = '';

  inValidLogin = false;

  constructor(
    private router: Router,
    private adminauth: AdminauthService
  ) { }

  checkLogin(): void {

    if (this.adminauth.authenticate(this.username, this.password)) {

      this.inValidLogin = false;
      alert('Login Successful');

      this.router.navigate(['/admin']);

    } else {

      this.inValidLogin = true;
      alert('Invalid Username or Password');

      this.router.navigate(['/home']);

    }

  }

}