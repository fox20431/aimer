import { TestBed } from '@angular/core/testing';

import { FlipBoardService } from './flip-board.service';

describe('FlipBoardService', () => {
  let service: FlipBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
