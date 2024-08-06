import { UserService } from './../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private userService: UserService) {}
  private currentList: any = null;
  private apiUrl = '/mygrocerylist/api/v1/list/'
  currentUser = this.userService.getCurrentUser()

  setCurrentList(list: any){
    this.currentList = list
  }

  getCurrentList(){
    return this.currentList
  }

  createList(title: string){
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
