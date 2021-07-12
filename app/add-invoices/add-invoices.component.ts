import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Invoice } from '../_invoice/invoice.model'
import { FlashMessagesService } from 'angular2-flash-messages';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-invoices',
  templateUrl: './add-invoices.component.html',
  styleUrls: ['./add-invoices.component.css']
})
export class AddInvoicesComponent implements OnInit {
  formData: FormGroup;
  constructor(private apiService: ApiService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.formData = new FormGroup({
      invoice_number: new FormControl(),
      client_name: new FormControl(),
      client_email: new FormControl(),
      project_name: new FormControl(),
      amount: new FormControl(),
    });
  }

  onClickSubmit(invoice: Invoice) {
    this.apiService.post_api('invoices/', invoice, true)
      .subscribe(resp => {
        this.formData.reset();
        this._flashMessagesService.show('Invoice Added', { cssClass: 'alert-success', timeout: 5000 });
      });
  }

}
