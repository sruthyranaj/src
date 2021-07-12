import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get_api('invoices/')
      .subscribe(resp => {
        this.invoices = resp['body']
      });
  }
}
