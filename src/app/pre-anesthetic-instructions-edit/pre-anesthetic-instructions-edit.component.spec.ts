import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAnestheticInstructionsEditComponent } from './pre-anesthetic-instructions-edit.component';

describe('PreAnestheticInstructionsEditComponent', () => {
  let component: PreAnestheticInstructionsEditComponent;
  let fixture: ComponentFixture<PreAnestheticInstructionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAnestheticInstructionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAnestheticInstructionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
