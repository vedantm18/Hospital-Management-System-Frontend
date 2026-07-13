import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {

    if (username === 'admin' && password === 'admin123@') {

      sessionStorage.setItem('username', username);
      return true;

    } else {

      return false;

    }

  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut(): void {
    sessionStorage.removeItem('username');
  }

}