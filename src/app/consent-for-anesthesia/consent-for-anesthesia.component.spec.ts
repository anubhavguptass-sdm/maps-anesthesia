import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentForAnesthesiaComponent } from './consent-for-anesthesia.component';

describe('ConsentForAnesthesiaComponent', () => {
  let component: ConsentForAnesthesiaComponent;
  let fixture: ComponentFixture<ConsentForAnesthesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsentForAnesthesiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentForAnesthesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
