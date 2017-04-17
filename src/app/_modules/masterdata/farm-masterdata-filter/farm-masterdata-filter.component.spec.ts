import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmMasterdataFilterComponent } from './farm-masterdata-filter.component';

describe('FarmMasterdataFilterComponent', () => {
  let component: FarmMasterdataFilterComponent;
  let fixture: ComponentFixture<FarmMasterdataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmMasterdataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmMasterdataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
