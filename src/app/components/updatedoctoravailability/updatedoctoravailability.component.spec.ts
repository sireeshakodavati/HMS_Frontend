import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedoctoravailabilityComponent } from './updatedoctoravailability.component';

describe('UpdatedoctoravailabilityComponent', () => {
  let component: UpdatedoctoravailabilityComponent;
  let fixture: ComponentFixture<UpdatedoctoravailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatedoctoravailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatedoctoravailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
