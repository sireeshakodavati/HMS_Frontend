import { Component } from '@angular/core';
import { MedicalTest } from '@app/model/medicaltest';
import { MedicaltestService } from '@app/services/medicaltest.service';

@Component({
  selector: 'app-updatemedicaltest',
  templateUrl: './updatemedicaltest.component.html',
  styleUrl: './updatemedicaltest.component.css'
})
export class UpdatemedicaltestComponent {
  constructor(private medicaltestService:MedicaltestService){}
  updateMedicalTest(formData:MedicalTest)
  {
    this.medicaltestService.update(formData)
    .subscribe(
      (medicaltest)=>{console.log('Updated MedicalTest  is: '+medicaltest);}
      );
      alert("MedicalTest Updated")
   }
}
