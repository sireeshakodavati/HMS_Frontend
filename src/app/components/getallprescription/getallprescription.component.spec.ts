import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallprescriptionComponent } from './getallprescription.component';

describe('GetallprescriptionComponent', () => {
  let component: GetallprescriptionComponent;
  let fixture: ComponentFixture<GetallprescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallprescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallprescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
