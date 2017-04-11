import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataListComponent } from './masterdata-list.component';

describe('MasterdataListComponent', () => {
  let component: MasterdataListComponent;
  let fixture: ComponentFixture<MasterdataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
