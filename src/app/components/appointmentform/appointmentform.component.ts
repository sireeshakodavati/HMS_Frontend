import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Appointment } from '@app/model/Appointment';
import { AppointmentService } from '@app/services/appointment.service';

@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrl: './appointmentform.component.css'
})
export class AppointmentformComponent {
 
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder,private appointmentService:AppointmentService) { 

    this.appointmentForm = this.fb.group({
      appointmentId: [null, Validators.required],
      appointmentDate: [null, [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]],
      appointmentTime:  [null, [Validators.pattern('^(1[0-2]|0?[1-9]):[0-5]\\d+:[0-5]\\d+ (AM|PM)$')]],
      status: [null, [Validators.pattern('[A-Z][a-z]{3,20}')]],
    });
  }

  addAppointment(formData:Appointment) {
    console.log(formData);
    this.appointmentService.add(formData)
      .subscribe(
        (appointment) => {
          console.log('Added Appointment is: ',appointment);
        },
        (error) => {
          console.error('Error adding Appointment:', error);
        }
      );
    console.log(formData);
  }


  isFieldInvalid(field: string): boolean {
    const control = this.appointmentForm.controls[field];
    return control?.touched && control?.hasError('pattern');
  }
}



