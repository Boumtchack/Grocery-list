import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title:'Home Page'
  },
  {
    path: 'user',
    component: UserComponent,
    title:'Profile Page'
  },
  {
    path: 'list/:id',
    component: ListComponent,
    title: 'List Page'
  }
];
