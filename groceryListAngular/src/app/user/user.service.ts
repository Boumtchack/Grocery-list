import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: any = null;

  constructor() {}

  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser
  }

  updateUserLists(list: any){
    this.currentUser.lists.push(list)
  }
}


// user Antoine test id : 03773c87-0187-4d0c-90d9-fe25e6808bd7
