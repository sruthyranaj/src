import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../_user/user.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   formData: FormGroup;

   constructor(private apiService: ApiService, private _flashMessagesService: FlashMessagesService) { }

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

      this.apiService.post_api('rest-auth/registration/', user, false)
         .subscribe(resp => {
            this.formData.reset();
            this._flashMessagesService.show('successfully registered. Please login to continue', { cssClass: 'alert-success', timeout: 5000 });
         });
   }

}
