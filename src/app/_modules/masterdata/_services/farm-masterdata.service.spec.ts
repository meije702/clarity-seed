import { TestBed, inject } from '@angular/core/testing';

import { FarmMasterdataService } from './farm-masterdata.service';

describe('FarmMasterdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FarmMasterdataService]
    });
  });

  it('should ...', inject([FarmMasterdataService], (service: FarmMasterdataService) => {
    expect(service).toBeTruthy();
  }));
});
