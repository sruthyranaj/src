import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'pay-app';
  isUserLoggedIn: string;
  username: string;
  ngOnInit() {
    // get login information from local storage to set the menu items
    this.isUserLoggedIn = localStorage.getItem("isUserLoggedIn")
    this.username = localStorage.getItem("user")
  }
}
