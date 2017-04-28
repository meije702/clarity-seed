import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolgraderPotatoDetailComponent } from './solgrader-potato-detail.component';

describe('SolgraderPotatoDetailComponent', () => {
  let component: SolgraderPotatoDetailComponent;
  let fixture: ComponentFixture<SolgraderPotatoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolgraderPotatoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolgraderPotatoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
