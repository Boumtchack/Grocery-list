import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private userService: UserService) {}
  private apiUrl = '/mygrocerylist/api/v1/list/'
  private currentList: any = null;
  currentUser: any;

  getCurrentList(){
    return this.currentList
  }


  createList(title: string){
    this.currentUser = this.userService.getCurrentUser()
    const listData = {
      title: title,
      userId: this.currentUser.id
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(listData)
    }
    return new Promise((resolve) => {
      fetch(this.apiUrl, options)
      .then(response => response.json())
      .then((data) => {
        data.user = this.currentUser
        this.currentList = data
        this.userService.updateUserLists(data)
        resolve(data)
      })
    })
  }

  findList(uuid: string) {
    fetch(this.apiUrl + uuid)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        this.currentList = data;
        console.log(this.currentList);
      })
      .catch((error) => {
        console.error('Error finding list:', error);
      });
  }
}
