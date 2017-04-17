import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoMasterdataFilterComponent } from './potato-masterdata-filter.component';

describe('PotatoMasterdataFilterComponent', () => {
  let component: PotatoMasterdataFilterComponent;
  let fixture: ComponentFixture<PotatoMasterdataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoMasterdataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoMasterdataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
