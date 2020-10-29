import { TestBed } from '@angular/core/testing';

import { CustomLayoutService } from './custom-layout.service';

describe('CustomLayoutService', () => {
  let service: CustomLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
