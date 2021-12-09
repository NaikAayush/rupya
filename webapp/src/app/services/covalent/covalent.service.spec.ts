import { TestBed } from '@angular/core/testing';

import { CovalentService } from './covalent.service';

describe('CovalentService', () => {
  let service: CovalentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovalentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
