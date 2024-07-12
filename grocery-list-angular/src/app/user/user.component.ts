import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {User} from '../user'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent{
  @Input() user!:User;
}

