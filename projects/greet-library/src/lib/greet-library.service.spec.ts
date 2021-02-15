import { TestBed } from '@angular/core/testing';

import { GreetLibraryService } from './greet-library.service';

describe('GreetLibraryService', () => {
  let service: GreetLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreetLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
