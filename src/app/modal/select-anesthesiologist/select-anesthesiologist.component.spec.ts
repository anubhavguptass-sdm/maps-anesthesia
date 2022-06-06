import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnesthesiologistComponent } from './select-anesthesiologist.component';

describe('SelectAnesthesiologistComponent', () => {
  let component: SelectAnesthesiologistComponent;
  let fixture: ComponentFixture<SelectAnesthesiologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAnesthesiologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAnesthesiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
