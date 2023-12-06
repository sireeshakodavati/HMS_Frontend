import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldoctorComponent } from './getalldoctor.component';

describe('GetalldoctorComponent', () => {
  let component: GetalldoctorComponent;
  let fixture: ComponentFixture<GetalldoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetalldoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetalldoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
