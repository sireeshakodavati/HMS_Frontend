import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorAvailability } from '@app/model/DoctorAvailability';
import { DoctoravailabilityService } from '@app/services/doctoravailability.service';

@Component({
  selector: 'app-updatedoctoravailability',
  templateUrl: './updatedoctoravailability.component.html',
  styleUrl: './updatedoctoravailability.component.css'
})
export class UpdatedoctoravailabilityComponent {
  doctoravailabilityForm: FormGroup;

  constructor(private fb: FormBuilder, private doctoravailabilityService: DoctoravailabilityService) {
    this.doctoravailabilityForm = this.fb.group({
      doctorAvailabilityId: [null, [Validators.required]],
      dayOfWeek: [null, [Validators.required, Validators.pattern(/[A-Z][a-z]{3,20}/)]],
      startTime: [null, [Validators.required, Validators.pattern(/^(1[0-2]|0?[1-9]):[0-5]\d+:[0-5]\d+ (AM|PM)$/)]],
      endTime: [null, [Validators.required, Validators.pattern(/^(1[0-2]|0?[1-9]):[0-5]\d+:[0-5]\d+ (AM|PM)$/)]],
    });
  
  }
  updateDoctorAvailability(formData:DoctorAvailability)
  {
    this.doctoravailabilityService.update(formData)
    .subscribe(
      (doctoravailability)=>{console.log('Updated DoctorAvailability  is: '+doctoravailability);}
      );
      alert("DoctorAvailability Updated")
   }
  
   isFieldInvalid(field: string): boolean {
    const control = this.doctoravailabilityForm.controls[field];
    return control?.touched && control?.hasError('pattern');
  }
}
