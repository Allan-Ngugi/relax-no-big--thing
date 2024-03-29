import { TestBed } from '@angular/core/testing';

import { BirthRegService } from './birthreg.service';

describe('BirthregService', () => {
  let service: BirthRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
