import { TestBed } from '@angular/core/testing';

import { ResolveIssueService } from './resolve-issue.service';

describe('ResolveIssueService', () => {
  let service: ResolveIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
