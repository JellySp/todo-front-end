import { Injectable } from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http: HttpClient) { }

  retrieveAllTodos(username) {
    console.log('execute retrieveAllTodos');
    // <HelloWorldBean> defines the structure of the message
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);

  }
}
