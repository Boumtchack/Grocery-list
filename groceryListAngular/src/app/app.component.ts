import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'groceryListAngular';
  private url = '/mygrocerylist/api/v1/user/';
  uuid = '';
  newName = '';
  currentUser = { id: '', name: '' };

  createUser() {
    const userData = {
      name: this.newName
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData)
    }
    fetch(this.url, options)
      .then(response => response.json())
      .then((data) => {
        this.currentUser = data;
        console.log(this.currentUser);
      })
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
