import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAnestheticInstructionsComponent } from './pre-anesthetic-instructions.component';

describe('PreAnestheticInstructionsComponent', () => {
  let component: PreAnestheticInstructionsComponent;
  let fixture: ComponentFixture<PreAnestheticInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAnestheticInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAnestheticInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
