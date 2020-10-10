import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BasicAuthenticationService} from "../basicauthentication/basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) {
  }

  // tslint:disable-next-line:typedef
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // base 64 encoding
    const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticationtoken();
    const username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      request = request.clone(
        {
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
        }
      );
    }
    return next.handle(request);
  }


}
