import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'sup?';
  name = '';
  welcomeMessageFromService: string;
  // ActivatedRoute
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit(): void {
    this.message = 'Sup?';
    this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage(): void {
    // doesn't work without .subscribe
    // subscribe is asynchronous
    // this means that the next line will run whenever the response comes
    // therefore the console log will happen first because the method is waiting for a response
    // first parameter defines what to do with a succesful response
    this.service.executeHelloWorldBeanService().subscribe(response => this.handleSuccesfulResponse(response),
        error => this.handleErrorResponse(error));
    // console.log('getWelomeMessage last line');
  }

  getWelcomeMessageWithParameter(): void {

    this.service.executeHelloWorldWithPathVariable(this.name).subscribe(response => this.handleSuccesfulResponse(response),
      error => this.handleErrorResponse(error));
    // console.log('getWelomeMessage last line');
  }

  // tslint:disable-next-line:typedef
  handleSuccesfulResponse(response) {
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);

  }

  // tslint:disable-next-line:typedef
  private handleErrorResponse(error) {
    // console.log('Error');
    // console.log('error: ' +error);
    // console.log('error.message ' + error.message);
    // console.log('error.error.message ' + error.error.message);
    this.welcomeMessageFromService = error.error.message;

  }
}
