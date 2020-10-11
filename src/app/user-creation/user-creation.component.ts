import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  username: string;
  password: string;
  confirmPassword: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createUser() {
    if (this.comparePassword()) {
      this.router.navigate(['login']);
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  comparePassword() {
  return (this.password === this.confirmPassword);
  }

  // tslint:disable-next-line:typedef
  isUserNameTaken() {
    if (this.username === 'Jelly') {
      return true;
    } else {
      return false;
    }
  }

}
