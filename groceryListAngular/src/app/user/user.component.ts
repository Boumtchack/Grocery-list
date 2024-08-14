import { ListService } from './../list/list.service';
import { RouterLink, RouterLinkActive, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(
    private userService: UserService,
    private listService: ListService,
    private router: Router,
  ) {}
  currentUser = this.userService.getCurrentUser();
  listNameCreate: string ='';
  lastList: any;

  createList() {
    this.listService.createList(this.listNameCreate)
    .then((data)=>{
      this.lastList = data
      this.redirectToList(this.lastList.id)
    })
  }
  redirectToList(listId: string){
    this.router.navigate([`/list/${listId}`])
  }
}
