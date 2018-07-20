import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTriggerComponent } from './chart-trigger.component';

describe('ChartTriggerComponent', () => {
  let component: ChartTriggerComponent;
  let fixture: ComponentFixture<ChartTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
