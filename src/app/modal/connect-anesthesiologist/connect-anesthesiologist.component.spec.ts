import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAnesthesiologistComponent } from './connect-anesthesiologist.component';

describe('ConnectAnesthesiologistComponent', () => {
  let component: ConnectAnesthesiologistComponent;
  let fixture: ComponentFixture<ConnectAnesthesiologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectAnesthesiologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectAnesthesiologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
