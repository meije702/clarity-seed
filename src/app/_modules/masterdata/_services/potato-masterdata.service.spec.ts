import { TestBed, inject } from '@angular/core/testing';

import { PotatoMasterdataService } from './potato-masterdata.service';

describe('PotatoMasterdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PotatoMasterdataService]
    });
  });

  it('should ...', inject([PotatoMasterdataService], (service: PotatoMasterdataService) => {
    expect(service).toBeTruthy();
  }));
});
