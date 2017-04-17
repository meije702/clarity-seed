import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotMasterdataComponent } from './plot-masterdata.component';

describe('PlotMasterdataComponent', () => {
  let component: PlotMasterdataComponent;
  let fixture: ComponentFixture<PlotMasterdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotMasterdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
