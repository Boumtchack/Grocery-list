import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  constructor(private userService: UserService) {}
  currentUser = this.userService.getCurrentUser()
}
