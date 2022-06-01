import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnesthesiologistDetailComponent } from './anesthesiologist-detail.component';

describe('AnesthesiologistDetailComponent', () => {
  let component: AnesthesiologistDetailComponent;
  let fixture: ComponentFixture<AnesthesiologistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnesthesiologistDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnesthesiologistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
