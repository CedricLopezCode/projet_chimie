import { TestBed } from '@angular/core/testing';

import { RetrosyntheseService } from './retrosynthese.service';

describe('RetrosyntheseService', () => {
  let service: RetrosyntheseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrosyntheseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
