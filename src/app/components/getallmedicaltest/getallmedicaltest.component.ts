import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalTest } from '@app/model/medicaltest';
import { MedicaltestService } from '@app/services/medicaltest.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-getallmedicaltest',
  templateUrl: './getallmedicaltest.component.html',
  styleUrl: './getallmedicaltest.component.css'
})
export class GetallmedicaltestComponent {
  medicaltestList:MedicalTest[] = [];
  constructor(private  medicaltestService:MedicaltestService,private router:Router){}
  getAll()
  {
   this.medicaltestService.getAll().subscribe( 
     (list)=>{ this.medicaltestList= list;  console.log(list)}
     
       );

}


deleteById(testId:number)
 {
   this.medicaltestService.deleteById(testId).subscribe( (msg)=>{  console.log(`Deleted Medicaltest with ID ${testId}`);});
   alert(`Prescription with ID ${testId} deleted successfully`);
 }
update()
 {
    this.router.navigate(['/updatemedicaltest']);

 }

}
