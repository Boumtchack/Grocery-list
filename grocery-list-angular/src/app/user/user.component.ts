import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from '../user'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent{
  @Input() user!:User;
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
