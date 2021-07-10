import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from './_user/user.model'
import { ApiService } from './api.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: any;

  public login(username: string, password: string) {

    this.data = this.apiService.post_api('/rest-auth/login/', { "username": username, 'password': password })
    if (this.data) {
      localStorage.setItem("isUserLoggedIn", "true")
      localStorage.setItem("user", username)
      this._flashMessagesService.show('successfully loggedin', { cssClass: 'alert-success', timeout: 5000 });

    }

  }

  logout(): void {
    localStorage.removeItem('isUserLoggedIn');
  }

  public register(user: User) {
    this.data = this.apiService.post_api('/rest-auth/registration/', user)
    if (this.data) {
      this._flashMessagesService.show('successfully Registred User. Please login to continue', { cssClass: 'alert-success', timeout: 5000 });
    }
  }

  constructor(private apiService: ApiService, private _flashMessagesService: FlashMessagesService) { }
}