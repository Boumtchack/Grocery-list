import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Grocery List App';
  isLoggedIn: boolean = true;
  userName: string = 'Jhon Doe'
  // isDisabled: boolean = true;
  // isActive: boolean = true;
  // fruitName: string = 'banana'
  // buttonClick(event:object){
  //   console.log(event);
  // }
  // userName: string = 'Mark'
  // textValue: string = 'Value from component'
  // keyUp(user:HTMLInputElement){
  //   console.log(user.value);
  // }
  // onKeyUp(){
  //   console.log(this.textValue);
  // }
  // updateUserName(username:HTMLInputElement){
  //   this.userName = username.value
  //   console.log(this.userName);
  // }
}
