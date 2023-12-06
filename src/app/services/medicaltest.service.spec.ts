import { TestBed } from '@angular/core/testing';

import { MedicaltestService } from './medicaltest.service';

describe('MedicaltestService', () => {
  let service: MedicaltestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicaltestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
