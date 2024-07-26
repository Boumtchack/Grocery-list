import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})

export class UserComponent {
  constructor(){}
  private url = '/mygrocerylist/api/v1/user/';
  uuid = '';
  newName = '';
  currentUser = { id: '', name: '' };

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
      });
  }
  findUser() {
    fetch(this.url + this.uuid)
      .then((response) => response.json())
      .then((data) => {
        this.currentUser = data;
        console.log(this.currentUser);
      });
  }
}
