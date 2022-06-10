import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricPreoperativeComponent } from './pediatric-preoperative.component';

describe('PediatricPreoperativeComponent', () => {
  let component: PediatricPreoperativeComponent;
  let fixture: ComponentFixture<PediatricPreoperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediatricPreoperativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PediatricPreoperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
