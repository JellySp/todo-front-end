import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.todo = new Todo(1, '', false, new Date());
    // here because subscribe is asynchronous and chrome throws an error because of Todo being null for some time

    this.todoService.retrieveTodo('Jelly', this.id ).subscribe(data => this.todo = data );
  }

  // tslint:disable-next-line:typedef
  saveTodo() {

  }
}
