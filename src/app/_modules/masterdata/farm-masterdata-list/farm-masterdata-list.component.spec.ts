import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmMasterdataListComponent } from './farm-masterdata-list.component';

describe('FarmMasterdataListComponent', () => {
  let component: FarmMasterdataListComponent;
  let fixture: ComponentFixture<FarmMasterdataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmMasterdataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmMasterdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
