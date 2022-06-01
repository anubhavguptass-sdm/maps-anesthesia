import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnesthesiologistProfileComponent } from './anesthesiologist-profile.component';

describe('AnesthesiologistProfileComponent', () => {
  let component: AnesthesiologistProfileComponent;
  let fixture: ComponentFixture<AnesthesiologistProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnesthesiologistProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnesthesiologistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
