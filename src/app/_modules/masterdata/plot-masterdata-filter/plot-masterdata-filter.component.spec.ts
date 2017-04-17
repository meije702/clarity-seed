import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotMasterdataFilterComponent } from './plot-masterdata-filter.component';

describe('PlotMasterdataFilterComponent', () => {
  let component: PlotMasterdataFilterComponent;
  let fixture: ComponentFixture<PlotMasterdataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotMasterdataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotMasterdataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
