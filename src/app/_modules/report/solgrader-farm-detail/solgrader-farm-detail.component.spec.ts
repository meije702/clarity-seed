import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolgraderFarmDetailComponent } from './solgrader-farm-detail.component';

describe('SolgraderFarmDetailComponent', () => {
  let component: SolgraderFarmDetailComponent;
  let fixture: ComponentFixture<SolgraderFarmDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolgraderFarmDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolgraderFarmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
