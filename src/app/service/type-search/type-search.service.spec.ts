import { TestBed } from '@angular/core/testing';

import { TypeSearchService } from './type-search.service';

describe('TypeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeSearchService = TestBed.get(TypeSearchService);
    expect(service).toBeTruthy();
  });
});
