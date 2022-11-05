import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionPolytechniqueComponent } from './admission-polytechnique.component';

describe('AdmissionPolytechniqueComponent', () => {
  let component: AdmissionPolytechniqueComponent;
  let fixture: ComponentFixture<AdmissionPolytechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionPolytechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionPolytechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
