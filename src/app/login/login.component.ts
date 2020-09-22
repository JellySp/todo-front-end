import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid credentials!';
  invalidLogin = false;

  // dependency injection
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) {
    // inject router for routing to other pages

  }

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
  }


  handleLogin(): void {

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
