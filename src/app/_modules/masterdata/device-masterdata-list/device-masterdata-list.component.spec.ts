import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMasterdataListComponent } from './device-masterdata-list.component';

describe('DeviceMasterdataListComponent', () => {
  let component: DeviceMasterdataListComponent;
  let fixture: ComponentFixture<DeviceMasterdataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMasterdataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMasterdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
