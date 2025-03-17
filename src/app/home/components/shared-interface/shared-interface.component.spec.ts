import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedInterfaceComponent } from './shared-interface.component';

describe('SharedInterfaceComponent', () => {
  let component: SharedInterfaceComponent;
  let fixture: ComponentFixture<SharedInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
