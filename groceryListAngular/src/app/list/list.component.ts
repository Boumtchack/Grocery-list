import { UserService } from './../user/user.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {

  constructor(private userService:UserService,private route: ActivatedRoute, private listService:ListService) {}
  currentUser: any = null;
  currentList: any = null;

  ngOnInit(): void {
    this.userService.loadUserFromSession();

    this.currentUser = this.userService.getCurrentUser();

    this.currentList = this.listService.getCurrentList()
  }
}
