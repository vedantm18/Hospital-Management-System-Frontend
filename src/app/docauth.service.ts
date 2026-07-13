import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  // Login Authentication
  authenticate(username: string, password: string): boolean {

    if (username === 'doctor' && password === 'doctor123') {

      sessionStorage.setItem('username', username);
      return true;

    } else {

      return false;

    }
  }

  // Check if doctor is logged in
  isUserLoggedIn(): boolean {

    let user = sessionStorage.getItem('username');

    return !(user === null);

  }

  // Logout
  logOut(): void {

    sessionStorage.removeItem('username');

  }

}