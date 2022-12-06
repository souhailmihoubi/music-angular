import { TestBed } from '@angular/core/testing';

import { SongGuard } from './song.guard';

describe('SongGuard', () => {
  let guard: SongGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SongGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
