import { TestBed } from '@angular/core/testing';

import { LendBorrowService } from './lend-borrow.service';

describe('LendBorrowService', () => {
  let service: LendBorrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendBorrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
