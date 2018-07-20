import { TestBed, inject } from '@angular/core/testing';

import { TypeChartService } from './type-chart.service';

describe('TypeChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeChartService]
    });
  });

  it('should be created', inject([TypeChartService], (service: TypeChartService) => {
    expect(service).toBeTruthy();
  }));
});
