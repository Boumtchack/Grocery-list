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

// export class UserComponent implements OnInit {
//   user: any = {};
//   ngOnInit() {
//     this.http
//       .get('/mygrocerylist/api/v1/user/5159c2bd-9126-49ad-b039-ef527da138b9')
//       .subscribe((result) => {this.user = result});
//   }
//   constructor(private http: HttpClient) {
//     // This service can now make HTTP requests via `this.http`.
//   }
