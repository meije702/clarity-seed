import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoMasterdataComponent } from './potato-masterdata.component';

describe('PotatoMasterdataComponent', () => {
  let component: PotatoMasterdataComponent;
  let fixture: ComponentFixture<PotatoMasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoMasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
