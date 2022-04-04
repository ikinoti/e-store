import { TestBed } from '@angular/core/testing';

import { LdataService } from './ldata.service';

describe('LdataService', () => {
  let service: LdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
