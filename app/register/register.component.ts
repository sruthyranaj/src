import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../_user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
      this.formData = new FormGroup({
         username: new FormControl(),
         email: new FormControl(),
         password1: new FormControl(),
         password2: new FormControl(),
      });
   }

   onClickSubmit(user: User) {
    console.log("Login page: " + user.username);
    console.log("Login page: " + user.password1);

    let res = this.authService.register(user)
    console.log(res)
 }

}
