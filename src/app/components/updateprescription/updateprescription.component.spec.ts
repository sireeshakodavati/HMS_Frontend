import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprescriptionComponent } from './updateprescription.component';

describe('UpdateprescriptionComponent', () => {
  let component: UpdateprescriptionComponent;
  let fixture: ComponentFixture<UpdateprescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateprescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
