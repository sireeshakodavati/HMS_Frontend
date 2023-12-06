import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldoctoravailabilityComponent } from './getalldoctoravailability.component';

describe('GetalldoctoravailabilityComponent', () => {
  let component: GetalldoctoravailabilityComponent;
  let fixture: ComponentFixture<GetalldoctoravailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetalldoctoravailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetalldoctoravailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
