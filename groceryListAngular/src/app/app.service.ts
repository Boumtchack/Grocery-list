import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = '/mygrocerylist/api/v1/'
  constructor(private http: HttpClient) { }

  getApi(service: string, uuid: string){
    return this.apiUrl + service + uuid
  }
}
