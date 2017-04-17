import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMasterdataFilterComponent } from './device-masterdata-filter.component';

describe('DeviceMasterdataFilterComponent', () => {
  let component: DeviceMasterdataFilterComponent;
  let fixture: ComponentFixture<DeviceMasterdataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMasterdataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMasterdataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
