import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from "../user/user.component";
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private userService: UserService, private router: Router) {}
  title = 'groceryListAngular';
  currentUser: any = null;
  userNameCreate: string ='';
  findUserUuid: string ='';

  redirectToUser(){
    this.router.navigate(['/user'])
  }

  createUser(){
    this.userService.createUserInDb(this.userNameCreate)
    .then(()=>{
      this.currentUser = this.userService.getCurrentUser()
      this.redirectToUser()
    })

  }

  findUser(){
    this.userService.findUser(this.findUserUuid)
    .then(()=>{
      this.currentUser = this.userService.getCurrentUser()
      this.redirectToUser()
    })

  }
}
