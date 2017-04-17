import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceMasterdataComponent } from './device-masterdata.component';

describe('DeviceMasterdataComponent', () => {
  let component: DeviceMasterdataComponent;
  let fixture: ComponentFixture<DeviceMasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceMasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
