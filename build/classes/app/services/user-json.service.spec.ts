import { TestBed, inject } from '@angular/core/testing';

import { UserJsonService } from './user-json.service';

describe('UserJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserJsonService]
    });
  });

  it('should be created', inject([UserJsonService], (service: UserJsonService) => {
    expect(service).toBeTruthy();
  }));
});
