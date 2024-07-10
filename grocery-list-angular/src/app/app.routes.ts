import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'user', component: UserComponent},
  {path: 'grocery-list', component: GroceryListComponent}
];
