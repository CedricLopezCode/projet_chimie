import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrosyntheseComponent } from './retrosynthese.component';

describe('RetrosyntheseComponent', () => {
  let component: RetrosyntheseComponent;
  let fixture: ComponentFixture<RetrosyntheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrosyntheseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrosyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
