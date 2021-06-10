import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMoleculeComponent } from './form-molecule.component';

describe('FormMoleculeComponent', () => {
  let component: FormMoleculeComponent;
  let fixture: ComponentFixture<FormMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMoleculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
