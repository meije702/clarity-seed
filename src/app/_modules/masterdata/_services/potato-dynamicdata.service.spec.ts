import { TestBed, inject } from '@angular/core/testing';

import { PotatoDynamicdataService } from './potato-dynamicdata.service';

describe('PotatoDynamicdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PotatoDynamicdataService]
    });
  });

  it('should ...', inject([PotatoDynamicdataService], (service: PotatoDynamicdataService) => {
    expect(service).toBeTruthy();
  }));
});
