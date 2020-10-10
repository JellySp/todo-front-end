import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL, AUTHENTICATED_USER, AUTHENTICATION_TOKEN} from '../../app.constants';

@Injectable({
  // @Injectable makes it a service
  // Is injectable anywhere
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  executeAuthenticationService(username, password) {
    console.log('execute executeAuthenticationService @BasicAuthenticationService');


    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    // ${} only works if the url is quoted with ticks ``
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers})
      .pipe(  // pipe allows us to decide what we should do if the request succeeds
        map(
          data => { // if auth succeeds, store user in the sessionstorage
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(AUTHENTICATION_TOKEN, basicAuthHeaderString);
            return data;
          }
        )
      );

  }

  // tslint:disable-next-line:typedef
  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  // tslint:disable-next-line:typedef
  getAuthenticationtoken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(AUTHENTICATION_TOKEN);
    }
  }

  isUserLoggedIn(): boolean {
    // console.log('User logged on: ' + sessionStorage.getItem('authenticateUser'));
    if (sessionStorage.getItem(AUTHENTICATED_USER) === 'Jelly') {
      return true;
    } else {
      return false;
    }
  }

  // tslint:disable-next-line:typedef
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(AUTHENTICATION_TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {
  }
}
