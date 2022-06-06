import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFeesComponent } from './additional-fees.component';

describe('AdditionalFeesComponent', () => {
  let component: AdditionalFeesComponent;
  let fixture: ComponentFixture<AdditionalFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
