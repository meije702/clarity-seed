import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolgraderPlotDetailComponent } from './solgrader-plot-detail.component';

describe('SolgraderPlotDetailComponent', () => {
  let component: SolgraderPlotDetailComponent;
  let fixture: ComponentFixture<SolgraderPlotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolgraderPlotDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolgraderPlotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
