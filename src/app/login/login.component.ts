import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Jelly';
  password = 'Jelly';
  errorMessage = 'Invalid credentials!';
  invalidLogin = false;

  // dependency injection
  constructor(private router: Router) { // inject router for routing to other pages

  }

  ngOnInit(): void {
  }


  handleLogin(): void {

    this.invalidLogin = false;

    if (this.username !== 'Jelly' || this.password !== 'Jelly') {
      this.invalidLogin = true;
    } else {
      // if login is correct, routes to 'welcome' page
      this.router.navigate(['welcome', this.username]);
    }
  }
}
