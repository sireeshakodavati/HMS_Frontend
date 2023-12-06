import { Component } from '@angular/core';
import { Prescription } from '@app/model/prescription';
import { PrescriptionService } from '@app/services/prescription.service';

@Component({
  selector: 'app-updateprescription',
  templateUrl: './updateprescription.component.html',
  styleUrl: './updateprescription.component.css'
})
export class UpdateprescriptionComponent {
  constructor(private prescriptionService:PrescriptionService){}
  updatePrescription(formData:Prescription)
  {
    this.prescriptionService.update(formData)
    .subscribe(
      (prescription)=>{console.log('Updated Prescription  is: '+prescription);}
      );
      alert("Prescription Updated")
   }
}
