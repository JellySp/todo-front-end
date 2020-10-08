import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

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
  //   [
  //   new Todo(1, 'Learn Angular', false, new Date()),
  //   new Todo(2, 'Master Angular', false, new Date()),
  //   new Todo(3, 'Take over the world', false, new Date())
  //
  // ];


  constructor(
    private todoService: TodoDataService,
    private router: Router
) { }

  ngOnInit(): void {
    // this.todoService.retrieveAllTodos('Jelly').subscribe(
    //   response =>
    //   {console.log(response);
    //    this.todos = response;
    // });
    this.refreshTodos();
  }

  // tslint:disable-next-line:typedef
  refreshTodos() {
    this.todoService.retrieveAllTodos('Jelly').subscribe(
      response =>
      {console.log(response);
       this.todos = response;
      });

  }

  // tslint:disable-next-line:typedef
  deleteTodo(id) {
  console.log(`delete TODO: ${id}`);
  this.todoService.deleteTodo('Jelly', id).subscribe(response => {
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
