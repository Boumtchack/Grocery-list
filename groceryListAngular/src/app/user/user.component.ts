import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

import { UserService } from './user.service';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ RouterOutlet, FormsModule, CommonModule, ListComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})

export class UserComponent {
  uuid: string = '';
  newName: string = '';
  currentUser: any = null;
  private url = '/mygrocerylist/api/v1/user/';

  constructor(private userService: UserService) {}

  createUser() {
    const userData = {
      name: this.newName,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    };
    fetch(this.url, options)
    .then((response) => response.json())
    .then((data) => {
      this.currentUser = data;
      console.log(this.currentUser);
      this.userService.setCurrentUser(this.currentUser);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
  }

  findUser() {
    fetch(this.url + this.uuid)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        this.currentUser = data;
        console.log(this.currentUser);
        this.userService.setCurrentUser(this.currentUser);
      })
      .catch(error => {
        console.error('Error finding user:', error);
      });
  }
}
