import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// enables the console.log(response.message) in welcome.component.ts to work properly
export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  // need to import HttpClientModule in app.module.ts
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  executeHelloWorldBeanService() {
    console.log('execute helloWorldService');
    // <HelloWorldBean> defines the structure of the message
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');

  }

  // tslint:disable-next-line:typedef
  executeHelloWorldWithPathVariable(name) {
    console.log('execute helloWorldWithPathVariable');
    // <HelloWorldBean> defines the structure of the message

    // ${} only works if the url is quoted with ticks ``
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);

  }
}
