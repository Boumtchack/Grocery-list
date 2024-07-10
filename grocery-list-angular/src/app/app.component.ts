import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'grocery-list-angular';
  user: any = {};
  ngOnInit() {
    this.http
      .get('/mygrocerylist/api/v1/user/5159c2bd-9126-49ad-b039-ef527da138b9')
      .subscribe((result) => {this.user = result});
  }
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }
}
