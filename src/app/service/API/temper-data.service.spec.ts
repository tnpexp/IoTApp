import { TestBed } from '@angular/core/testing';

import { TemperDataService } from './temper-data.service';

describe('TemperDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperDataService = TestBed.get(TemperDataService);
    expect(service).toBeTruthy();
  });
});
