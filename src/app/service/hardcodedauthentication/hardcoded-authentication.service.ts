import { Injectable } from '@angular/core';

@Injectable({
  // @Injectable makes it a service
  // Is injectable anywhere
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password): boolean {
    // console.log('before ' + this.isUserLoggedIn());
    if (username === 'Jelly' && password === 'Jelly') {
      sessionStorage.setItem('authenticateUser', username);
      // console.log('after ' + this.isUserLoggedIn());
      return true;
    } else {
    sessionStorage.setItem('authenticateUser', 'invalidUser');
    // console.log('Should be false: ' + this.isUserLoggedIn());

    return false;
    }
  }

  isUserLoggedIn(): boolean {
    // console.log('User logged on: ' + sessionStorage.getItem('authenticateUser'));
    if (sessionStorage.getItem('authenticateUser') === 'Jelly') {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.removeItem('authenticateUser');
}
}
