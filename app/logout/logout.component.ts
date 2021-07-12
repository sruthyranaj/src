import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
   selector: 'app-logout',
   templateUrl: './logout.component.html',
   styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

   constructor(private apiService: ApiService) { }

   ngOnInit() {
      this.apiService.post_api('rest-auth/logout/', {}, true)
         .subscribe(resp => {
            localStorage.clear();
            location.href = '/'
         });
   }

}