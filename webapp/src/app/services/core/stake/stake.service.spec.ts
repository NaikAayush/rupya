import { TestBed } from '@angular/core/testing';

import { StakeService } from './stake.service';

describe('StakeService', () => {
  let service: StakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
