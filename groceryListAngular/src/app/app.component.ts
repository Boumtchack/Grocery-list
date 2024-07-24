import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'groceryListAngular';
  private url = '/mygrocerylist/api/v1/'
  createUser(){
    console.log("user created");
  }

  findUser(){
    let ressource = 'user/'
    fetch(this.url + ressource + '14aba67a-43e1-4eb1-88fd-8d5685da8ca2')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    })
  }
}
