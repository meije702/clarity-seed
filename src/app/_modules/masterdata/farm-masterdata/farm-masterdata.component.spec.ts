import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmMasterdataComponent } from './farm-masterdata.component';

describe('FarmMasterdataComponent', () => {
  let component: FarmMasterdataComponent;
  let fixture: ComponentFixture<FarmMasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmMasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
