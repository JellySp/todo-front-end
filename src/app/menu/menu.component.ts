import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcodedauthentication/hardcoded-authentication.service';
import {BasicAuthenticationService} from "../service/basicauthentication/basic-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn = false;

  constructor(public basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
   // this.isUserLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
  }

}
