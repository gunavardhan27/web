import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhdScreeningComponent } from './adhd-screening.component';

describe('AdhdScreeningComponent', () => {
  let component: AdhdScreeningComponent;
  let fixture: ComponentFixture<AdhdScreeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdhdScreeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdhdScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
