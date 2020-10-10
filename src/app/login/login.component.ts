import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../service/basicauthentication/basic-authentication.service';

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
              private basicAuthenticationService: BasicAuthenticationService) {
    // inject router for routing to other pages

  }

  ngOnInit(): void {
    this.basicAuthenticationService.logout();
  }


  handleJWTAuthLogin(): void {

    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe(data => {console.log(data);
                          this.router.navigate(['welcome', this.username]);
                          this.invalidLogin = false;

        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      );

  }
}
