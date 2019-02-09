import { TestBed } from '@angular/core/testing';

import { AnMessagesService } from './an-messages.service';

describe('AnMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnMessagesService = TestBed.get(AnMessagesService);
    expect(service).toBeTruthy();
  });
});
