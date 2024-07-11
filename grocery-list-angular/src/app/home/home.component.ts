import { UserService } from './../user.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import {User} from '../user'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userList: User[] = []
  userService: UserService = inject(UserService);

  constructor(){
    this.userList = this.userService.getAllUser()
  }
}
