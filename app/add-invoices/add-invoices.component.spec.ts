import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Invoice } from '../_invoice/invoice.model';

import { AddInvoicesComponent } from './add-invoices.component';

describe('AddInvoicesComponent', () => {
  let component: AddInvoicesComponent;
  let fixture: ComponentFixture<AddInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
