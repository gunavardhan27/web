import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiverComponent } from './caregiver.component';

describe('CaregiverComponent', () => {
  let component: CaregiverComponent;
  let fixture: ComponentFixture<CaregiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaregiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
