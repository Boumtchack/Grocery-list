import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: any = null;
  private url = '/mygrocerylist/api/v1/user/';

  constructor() {}

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser(): Observable<any> {
    return of(this.currentUser);
  }
}
