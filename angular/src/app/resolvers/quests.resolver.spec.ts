import { TestBed } from '@angular/core/testing';

import { QuestsResolver } from './quests.resolver';

describe('QuestsResolver', () => {
  let resolver: QuestsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuestsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
