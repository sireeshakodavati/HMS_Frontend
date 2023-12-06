import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Prescription } from '@app/model/prescription';
import { PrescriptionService } from '@app/services/prescription.service';

@Component({
  selector: 'app-crudprescription',
  templateUrl: './crudprescription.component.html',
  styleUrl: './crudprescription.component.css'
})
export class CrudprescriptionComponent {
  @ViewChild('prescription') prescriptionForm: NgForm | undefined;
   constructor(private  prescriptionService:PrescriptionService){}
 
 addPrescription(formData:Prescription){
    
    this.prescriptionService.add(formData)
      .subscribe(
         (prescription)=>{console.log('Added Prescription  is: '+prescription);},
         (error) => {
          console.error('Error adding Prescription:', error);
          // You might want to display an error message to the user
        }
      );
  
    console.log(formData);
  

       }
}

