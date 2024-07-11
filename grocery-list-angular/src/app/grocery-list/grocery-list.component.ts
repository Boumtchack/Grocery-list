import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GroceryListService} from '../GroceryList.serice'
import { User } from "../user";

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.scss',
})
export class GroceryListComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  groceryListSerice = inject(GroceryListService);
  user: User | undefined;
  constructor(){
    const groceryListId = Number(this.route.snapshot.params['id'])
    this.groceryList = this.groceryListSerice.getGroceryListById(groceryListId)
  }
}
