import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  // tslint:disable-next-line:typedef
  intercept(request: HttpRequest<any>, next: HttpHandler){
    const username = 'Jelly';
    const password = 'Jelly';

    // base 64 encoding
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone(
      {
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      }
    );
    return next.handle(request);
  }


}
