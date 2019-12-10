import { TestBed } from '@angular/core/testing';

import { TVshowService } from './tvshow.service';

describe('TVshowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TVshowService = TestBed.get(TVshowService);
    expect(service).toBeTruthy();
  });
});
