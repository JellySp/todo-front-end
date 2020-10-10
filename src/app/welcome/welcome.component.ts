import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MenuComponent} from '../menu/menu.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'sup?';
  name = '';
  // ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = 'Sup?';
    this.name = this.route.snapshot.params.name;
  }

}
