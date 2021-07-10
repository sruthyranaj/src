import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from './_user/user.model'
import { ApiService } from './api.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: any;

  public login(username: string, password: string) {

    this.data = this.apiService.post_api('/rest-auth/login/', { "username": username, 'password': password })
    if(this.data == 'success')
    {
      localStorage.setItem("isUserLoggedIn", "true")
      localStorage.setItem("user", username)
    }

  }

  logout(): void {
    localStorage.removeItem('isUserLoggedIn');
  }

  public register(user: User) {
    this.apiService.post_api('/rest-auth/registration/', user)
  }

  constructor(private apiService: ApiService) { }
}