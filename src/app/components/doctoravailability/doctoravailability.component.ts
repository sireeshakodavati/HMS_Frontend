import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DoctorAvailability } from '@app/model/DoctorAvailability';
import { DoctoravailabilityService } from '@app/services/doctoravailability.service';

@Component({
  selector: 'app-doctoravailability',
  templateUrl: './doctoravailability.component.html',
  styleUrl: './doctoravailability.component.css'
})
export class DoctoravailabilityComponent {
  // @ViewChild('doctoravailabilityForm') doctoravailabilityForm: NgForm | undefined;
  // constructor(private  doctoravailabilityservice:DoctoravailabilityService){}
  

  doctoravailabilityForm: FormGroup;

  constructor(private fb: FormBuilder, private doctoravailabilityservice: DoctoravailabilityService) {
    this.doctoravailabilityForm = this.fb.group({
      doctorAvailabilityId: [null, [Validators.required]],
      dayOfWeek: [null, [Validators.required, Validators.pattern(/[A-Z][a-z]{3,20}/)]],
      startTime: [null, [Validators.required, Validators.pattern(/^(1[0-2]|0?[1-9]):[0-5]\d+:[0-5]\d+ (AM|PM)$/)]],
      endTime: [null, [Validators.required, Validators.pattern(/^(1[0-2]|0?[1-9]):[0-5]\d+:[0-5]\d+ (AM|PM)$/)]],
    });
  }

addDoctorAvailability(formData: DoctorAvailability) {
  console.log(formData);
  this.doctoravailabilityservice.add(formData)
    .subscribe(
      (doctoravailability) => {
        console.log('Added DoctorAvailabiity is: ',doctoravailability);
      },
      (error) => {
        console.error('Error adding Doctoravailability:', error);
        // You might want to display an error message to the user
      }
    );

  console.log(formData);
}

isFieldInvalid(field: string): boolean {
  const control = this.doctoravailabilityForm.controls[field];
  return control?.touched && control?.hasError('pattern');
}
  
}
