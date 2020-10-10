import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../service/basicauthentication/basic-authentication.service';
import {delay} from "rxjs/operators";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  username: string;
  //   [
  //   new Todo(1, 'Learn Angular', false, new Date()),
  //   new Todo(2, 'Master Angular', false, new Date()),
  //   new Todo(3, 'Take over the world', false, new Date())
  //
  // ];


  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
) { }

  ngOnInit(): void {

    this.refreshTodos();
  }

  // tslint:disable-next-line:typedef
  refreshTodos() {
    console.log(this.basicAuthenticationService.getAuthenticatedUser() + ' likes bananas');
    this.todoService.retrieveAllTodos(this.basicAuthenticationService.getAuthenticatedUser()).subscribe(
      response => {
        console.log(response);
        this.todos = response;
      });

  }

  // tslint:disable-next-line:typedef
  deleteTodo(id) {
  console.log(`delete TODO: ${id}`);
  this.todoService.deleteTodo(this.basicAuthenticationService.getAuthenticatedUser(), id).subscribe(response => {
    console.log(response);
    this.message = `Todo with id ${id} successfully deleted!`;
    this.refreshTodos();

  });
  }

  // tslint:disable-next-line:typedef
  updateTodo(id) {
    console.log(`update TODO: ${id}`);
    this.router.navigate(['todos', id]);


  }

  // tslint:disable-next-line:typedef
  addTodo() {
    this.router.navigate(['todos', -1]);
  }


}
