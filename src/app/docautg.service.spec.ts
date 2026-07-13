import { TestBed } from '@angular/core/testing';

import { DocautgService } from './docautg.service';

describe('DocautgService', () => {
  let service: DocautgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocautgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
