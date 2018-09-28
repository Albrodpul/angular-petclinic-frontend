import { TestBed } from '@angular/core/testing';

import { RendersService } from './renders.service';

describe('RendersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendersService = TestBed.get(RendersService);
    expect(service).toBeTruthy();
  });
});
