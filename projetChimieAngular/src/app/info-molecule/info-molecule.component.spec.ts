import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMoleculeComponent } from './info-molecule.component';

describe('InfoMoleculeComponent', () => {
  let component: InfoMoleculeComponent;
  let fixture: ComponentFixture<InfoMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMoleculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
