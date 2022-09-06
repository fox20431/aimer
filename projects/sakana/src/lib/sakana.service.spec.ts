import { TestBed } from '@angular/core/testing';

import { SakanaService } from './sakana.service';

describe('SakanaService', () => {
  let service: SakanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SakanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
