import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMasterdataComponent } from './field-masterdata.component';

describe('FieldMasterdataComponent', () => {
  let component: FieldMasterdataComponent;
  let fixture: ComponentFixture<FieldMasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
