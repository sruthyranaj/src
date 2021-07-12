import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  link: string
  error_message;
  amount;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private _flashMessagesService: FlashMessagesService) {this.route.params.subscribe( params => this.link = params["link"] )}
  
  ngOnInit() {
    this.apiService.get_api('customers/'+this.link, false)
         .subscribe(resp => {
         let respone = JSON.stringify(resp)
         if(respone.length > 0){
           console.log("respose", respone)
           this.amount = resp['body'][0]["amount"]
         }else{
           this.error_message = "The link is invaild or expired"
         }
         });
  }

}
