import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeizureDetailsComponent } from './seizure-details.component';

describe('SeizureDetailsComponent', () => {
  let component: SeizureDetailsComponent;
  let fixture: ComponentFixture<SeizureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeizureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeizureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
