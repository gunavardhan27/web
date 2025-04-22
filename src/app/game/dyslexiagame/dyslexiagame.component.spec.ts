import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyslexiagameComponent } from './dyslexiagame.component';

describe('DyslexiagameComponent', () => {
  let component: DyslexiagameComponent;
  let fixture: ComponentFixture<DyslexiagameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DyslexiagameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyslexiagameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
