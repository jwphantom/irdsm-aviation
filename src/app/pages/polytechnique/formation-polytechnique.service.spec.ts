import { TestBed } from '@angular/core/testing';

import { FormationPolytechniqueService } from './formation-polytechnique.service';

describe('FormationPolytechniqueService', () => {
  let service: FormationPolytechniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationPolytechniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
