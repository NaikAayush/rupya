import { TestBed } from '@angular/core/testing';

import { LendService } from './lend.service';

describe('LendService', () => {
  let service: LendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
