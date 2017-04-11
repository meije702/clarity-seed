import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolgraderReportComponent } from './solgrader-report.component';

describe('SolgraderReportComponent', () => {
  let component: SolgraderReportComponent;
  let fixture: ComponentFixture<SolgraderReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolgraderReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolgraderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
