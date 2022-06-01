import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnesthesiologistComponent } from './anesthesiologist.component';

describe('AnesthesiologistComponent', () => {
  let component: AnesthesiologistComponent;
  let fixture: ComponentFixture<AnesthesiologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnesthesiologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnesthesiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
