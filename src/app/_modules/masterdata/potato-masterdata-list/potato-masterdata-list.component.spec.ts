import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoMasterdataListComponent } from './potato-masterdata-list.component';

describe('PotatoMasterdataListComponent', () => {
  let component: PotatoMasterdataListComponent;
  let fixture: ComponentFixture<PotatoMasterdataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoMasterdataListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoMasterdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
