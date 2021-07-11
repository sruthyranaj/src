import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AddInvoicesComponent } from './add-invoices/add-invoices.component';
import { PayappGuard } from './payapp.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'add_invoices', component: AddInvoicesComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
