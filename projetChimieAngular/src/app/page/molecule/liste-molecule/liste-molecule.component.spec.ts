import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMoleculeComponent } from './liste-molecule.component';

describe('ListeMoleculeComponent', () => {
  let component: ListeMoleculeComponent;
  let fixture: ComponentFixture<ListeMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMoleculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
