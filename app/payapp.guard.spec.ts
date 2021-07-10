import { TestBed, async, inject } from '@angular/core/testing';

import { PayappGuard } from './payapp.guard';

describe('PayappGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayappGuard]
    });
  });

  it('should ...', inject([PayappGuard], (guard: PayappGuard) => {
    expect(guard).toBeTruthy();
  }));
});
