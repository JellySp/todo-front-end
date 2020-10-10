import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcodedauthentication/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn = false;

  constructor(public hardCodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
   // this.isUserLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
  }

}
