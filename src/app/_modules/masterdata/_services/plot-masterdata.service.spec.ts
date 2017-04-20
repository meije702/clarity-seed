import { TestBed, inject } from '@angular/core/testing';

import { PlotMasterdataService } from './plot-masterdata.service';

describe('PlotMasterdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlotMasterdataService]
    });
  });

  it('should ...', inject([PlotMasterdataService], (service: PlotMasterdataService) => {
    expect(service).toBeTruthy();
  }));
});
