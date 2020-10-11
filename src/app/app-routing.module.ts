import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/routeguard/route-guard.service';
import {TodoComponent} from './todo/todo.component';
import {UserCreationComponent} from './user-creation/user-creation.component';

const routes: Routes = [
  // welcome
  { path: '', component: LoginComponent}, // default path
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]}, // canActivate takes an array of services
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
  { path: 'logout', component: LogoutComponent},
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService]} ,
  { path: 'newuser', component: UserCreationComponent },
  { path: '**', component: ErrorComponent} // ** for anything else. NB! This has to be the last route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
