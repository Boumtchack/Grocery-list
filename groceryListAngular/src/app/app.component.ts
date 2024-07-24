import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'groceryListAngular';
  private url = '/mygrocerylist/api/v1/'
  uuid =''
  createUser(){
    console.log("user created");
  }

  findUser(){
    let ressource = 'user/'
    fetch(this.url + ressource + this.uuid )
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
  }
}
