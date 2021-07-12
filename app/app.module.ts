import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CookieService } from 'ngx-cookie-service';
import { AddInvoicesComponent } from './add-invoices/add-invoices.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    InvoicesComponent,
    AddInvoicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
