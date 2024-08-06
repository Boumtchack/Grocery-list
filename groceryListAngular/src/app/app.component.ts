import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private userService: UserService) {}
  title = 'groceryListAngular';
  currentUser: any = null;
  userNameCreate: string ='';
  findUserUuid: string ='';

  createUser(){
    this.userService.createUserInDb(this.userNameCreate)
    .then(()=>{
      this.currentUser = this.userService.getCurrentUser()
    })
  }

  findUser(){
    this.userService.findUser(this.findUserUuid)
    .then(()=>{
      this.currentUser = this.userService.getCurrentUser()
    })
  }
}
