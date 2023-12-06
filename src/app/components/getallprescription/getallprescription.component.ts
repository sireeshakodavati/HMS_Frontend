import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from '@app/model/prescription';
import { PrescriptionService } from '@app/services/prescription.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-getallprescription',
  templateUrl: './getallprescription.component.html',
  styleUrl: './getallprescription.component.css'
})
export class GetallprescriptionComponent {
  prescriptionList:Prescription[] = [];
  constructor(private  prescriptionService:PrescriptionService,private router:Router){}
  getAll()
  {
   this.prescriptionService.getAll().subscribe( 
     (list)=>{ this.prescriptionList = list;  console.log(list)}
     
       );

}

deleteById(prescriptionId:number)
 {
   this.prescriptionService.deleteById(prescriptionId).subscribe( (msg)=>{  console.log(`Deleted prescription with ID ${prescriptionId}`);});
   alert(`Prescription with ID ${prescriptionId} deleted successfully`);
 }
 update()
 {
    this.router.navigate(['/updateprescription']);

 }
}


