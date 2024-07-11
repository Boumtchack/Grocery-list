import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected userList: User[] = [
    {
      'id': '1234',
      'name': 'antoine',
      'lists': 'somelists',
    },
    {
      'id': '5678',
      'name': 'Vic',
      'lists': 'somelists',
    }
  ];
  constructor() { }

  getAllUser() : User[] {
    return this.userList
  }

  getUserById(id: String): User | undefined {
    return this.userList.find(user => user.id === id)
  }
}
