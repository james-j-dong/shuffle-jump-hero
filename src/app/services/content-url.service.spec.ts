import { TestBed } from '@angular/core/testing';

import { ContentUrlService } from './content-url.service';

describe('ContentUrlService', () => {
  let service: ContentUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
