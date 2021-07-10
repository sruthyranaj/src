import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit    {
  
  title = 'pay-app';
  isUserLoggedIn: string;

  ngOnInit() {
    this.isUserLoggedIn = localStorage.getItem("isUserLoggedIn")
    console.log("log", localStorage.getItem("isUserLoggedIn"))
 }
}
