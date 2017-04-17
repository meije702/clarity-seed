import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotMasterdataListComponent } from './plot-masterdata-list.component';

describe('PlotMasterdataListComponent', () => {
  let component: PlotMasterdataListComponent;
  let fixture: ComponentFixture<PlotMasterdataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotMasterdataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotMasterdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
