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
  constructor(private apiService: ApiService, private route: ActivatedRoute, private _flashMessagesService: FlashMessagesService) { this.route.params.subscribe(params => this.link = params["link"]) }

  ngOnInit() {
    this.apiService.get_api('customers/' + this.link, false)
      .subscribe(resp => {
        let respone = JSON.stringify(resp)
        if (respone.length > 0) {
          console.log("respose", respone)
          this.amount = resp['body'][0]["amount"]
          this.loadStripe();
        } else {
          this.error_message = "The link is invaild or expired"
        }
      });
  }

  pay(amount) {
    // method for processing stripe payment
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
  }

}
