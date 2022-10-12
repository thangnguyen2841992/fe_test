import { TestBed } from '@angular/core/testing';

import { QuestionTestService } from './question-test.service';

describe('QuestionTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionTestService = TestBed.get(QuestionTestService);
    expect(service).toBeTruthy();
  });
});
