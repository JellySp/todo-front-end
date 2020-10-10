import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from '../data/welcome-data.service';

@Injectable({
  // @Injectable makes it a service
  // Is injectable anywhere
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient ) { }

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

  // tslint:disable-next-line:typedef
  executeAuthenticationService(username, password) {
    console.log('execute executeAuthenticationService @BasicAuthenticationService');


    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    // ${} only works if the url is quoted with ticks ``
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers});

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

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
