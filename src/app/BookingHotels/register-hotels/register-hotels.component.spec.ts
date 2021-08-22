import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHotelsComponent } from './register-hotels.component';

describe('RegisterHotelsComponent', () => {
  let component: RegisterHotelsComponent;
  let fixture: ComponentFixture<RegisterHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
