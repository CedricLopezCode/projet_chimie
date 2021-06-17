import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomMoleculeComponent } from './nom-molecule.component';

describe('NomMoleculeComponent', () => {
  let component: NomMoleculeComponent;
  let fixture: ComponentFixture<NomMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomMoleculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
