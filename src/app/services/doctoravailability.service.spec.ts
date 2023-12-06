import { TestBed } from '@angular/core/testing';

import { DoctoravailabilityService } from './doctoravailability.service';

describe('DoctoravailabilityService', () => {
  let service: DoctoravailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctoravailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
