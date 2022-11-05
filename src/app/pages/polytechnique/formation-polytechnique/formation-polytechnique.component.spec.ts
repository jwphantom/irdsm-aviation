import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPolytechniqueComponent } from './formation-polytechnique.component';

describe('FormationPolytechniqueComponent', () => {
  let component: FormationPolytechniqueComponent;
  let fixture: ComponentFixture<FormationPolytechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationPolytechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationPolytechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
