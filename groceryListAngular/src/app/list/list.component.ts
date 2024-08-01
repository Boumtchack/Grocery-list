import { UserService } from '../user/user.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [UserComponent, CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent {

  constructor(private userService: UserService) {}

  private url = '/mygrocerylist/api/v1/list/'
  newName = '';
  currentUser: number | null = null;

  createList(){
    const listData = {
      title: this.newName,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(listData)
    }
    return new Promise((resolve) => {
      fetch(this.url, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        resolve(data)
      })
    })
  }
}
