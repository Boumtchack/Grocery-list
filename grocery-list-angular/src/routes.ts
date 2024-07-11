import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { UserComponent } from './app/user/user.component';
import { GroceryListComponent } from './app/grocery-list/grocery-list.component';

const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'user', component: UserComponent, title: 'User Page' },
  { path: 'grocery-list/:id', component: GroceryListComponent, title: 'List Page' },
];

export default routeConfig;
