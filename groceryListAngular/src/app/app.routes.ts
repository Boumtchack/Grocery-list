import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Home Page'
  },
  {
    path: 'users',
    component: UserComponent,
    title: 'User Page'
  },
  {
    path: 'lists',
    component: ListComponent,
    title: 'List Page'
  }
];
