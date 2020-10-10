import { Injectable } from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  retrieveAllTodos(username) {
    console.log('execute retrieveAllTodos');
    // <HelloWorldBean> defines the structure of the message
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);

  }

  // tslint:disable-next-line:typedef
  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  // tslint:disable-next-line:typedef
  retrieveTodo(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  // tslint:disable-next-line:typedef
  updateTodo(username, id, todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  // tslint:disable-next-line:typedef
  createTodo(username, todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }


}
