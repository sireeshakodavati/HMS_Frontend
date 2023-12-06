import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '@app/model/Appointment';
import { AppointmentService } from '@app/services/appointment.service';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrl: './updateappointment.component.css'
})
export class UpdateappointmentComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {
    
    this.appointmentForm = this.fb.group({
      appointmentId: [null, Validators.required],
      appointmentDate: [null, [Validators.required, Validators.pattern('\\d{4}-\\d{2}-\\d{2}')]],
      appointmentTime:  [null, [Validators.pattern('^(1[0-2]|0?[1-9]):[0-5]\\d+:[0-5]\\d+ (AM|PM)$')]],
      status: [null, [Validators.pattern('[A-Z][a-z]{3,20}')]],
    });
  }
  updateAppointment(formData:Appointment)
  {
    this.appointmentService.update(formData)
    .subscribe(
      (appointment)=>{console.log('Updated Appointment is: '+appointment);}
      );
      alert("Appointment Updated")
   }
  
   isFieldInvalid(field: string): boolean {
    const control = this.appointmentForm.controls[field];
    return control?.touched && control?.hasError('pattern');
  }
}
