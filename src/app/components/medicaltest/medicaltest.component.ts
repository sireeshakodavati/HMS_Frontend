import { Component , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicalTest } from '@app/model/medicaltest';
import { MedicaltestService } from '@app/services/medicaltest.service';

 @Component({
  selector: 'app-medicaltest',
   templateUrl: './medicaltest.component.html',
  styleUrl: './medicaltest.component.css'
 })
 export class MedicaltestComponent {
  @ViewChild('medicalTestForm') medicalTestForm: NgForm | undefined;
  constructor(private  medicaltestService:MedicaltestService){}
  
addMedicalTest(formData: MedicalTest) {
  console.log(formData);
  this.medicaltestService.add(formData)
    .subscribe(
      (medicaltest) => {
        console.log('Added MedicalTest is: ', medicaltest);
      },
      (error) => {
        console.error('Error adding MedicalTest:', error);
        // You might want to display an error message to the user
      }
    );

  console.log(formData);
}
       
}
