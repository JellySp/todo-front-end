import { Component, OnInit } from '@angular/core';
import {BasicAuthenticationService} from '../service/basicauthentication/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public basicAuthenticationService: BasicAuthenticationService) { }
  username: string;
  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  setUserName() {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
  }
}
