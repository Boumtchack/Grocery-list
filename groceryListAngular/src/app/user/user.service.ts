import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private currentUser: any = null;
  private apiUrl = '/mygrocerylist/api/v1/user/';

  getCurrentUser() {
    return this.currentUser
  }

  updateUserLists(list: any) {
    if (this.currentUser) {
      this.currentUser.lists.push(list);
    }
  }

  saveUserIdInSession(userId: string) {
    sessionStorage.setItem('currentUserId', userId);
  }

  loadUserFromSession() {
    const userId = sessionStorage.getItem('currentUserId');
    if (userId) {
      this.findUser(userId);
    }
  }

  clearSession() {
    sessionStorage.clear();
    this.currentUser = null
  }

  createUserInDb(newName: string) {
    return new Promise((resolve, reject)=>{
      const userData = {
        name: newName,
      };
      const options = {
        method: 'POST',
        body: JSON.stringify(userData),
      };
      fetch(this.apiUrl, options)
        .then((response) => response.json())
        .then((data) => {
          this.currentUser = data;
          this.saveUserIdInSession(data.id);
          console.log("fetch", this.currentUser);
          resolve(undefined)
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
    })
  }

  findUser(uuid: string) {
    return new Promise((resolve, reject)=>{
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
          this.currentUser = data;
          resolve(undefined)
        })
        .catch((error) => {
          console.error('Error finding user:', error);
        });
    })
  }

}
