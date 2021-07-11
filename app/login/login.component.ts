import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   formData: FormGroup;

   constructor(private apiService: ApiService) { }

   ngOnInit() {
      this.formData = new FormGroup({
         username: new FormControl("admin"),
         password: new FormControl("admin"),
      });
   }



   onClickSubmit(data: any) {
      console.log(data)
      console.log("Login page: " + data.username);
      console.log("Login page: " + data.password);

      // this.authService.login(this.userName, this.password)
      this.apiService.post_api('rest-auth/login/', data)
         .subscribe(resp => {
            console.log(resp)
            localStorage.setItem("isUserLoggedIn", "true")
            localStorage.setItem("user", data.username)
            localStorage.setItem("X-CSRFToken", resp["key"])
            location.href = '/'
         });
   }
}