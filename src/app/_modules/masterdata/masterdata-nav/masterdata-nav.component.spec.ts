import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataNavComponent } from './masterdata-nav.component';

describe('MasterdataNavComponent', () => {
  let component: MasterdataNavComponent;
  let fixture: ComponentFixture<MasterdataNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdataNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdataNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
