import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessinMoleculeComponent } from './dessin-molecule.component';

describe('DessinMoleculeComponent', () => {
  let component: DessinMoleculeComponent;
  let fixture: ComponentFixture<DessinMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DessinMoleculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DessinMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
