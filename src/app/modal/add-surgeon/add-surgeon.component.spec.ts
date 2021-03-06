import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurgeonComponent } from './add-surgeon.component';

describe('AddSurgeonComponent', () => {
  let component: AddSurgeonComponent;
  let fixture: ComponentFixture<AddSurgeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSurgeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurgeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
