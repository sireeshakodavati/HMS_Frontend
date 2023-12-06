import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '@app/model/Patient';
import { PatientService } from '@app/services/patient.service';

@Component({
  selector: 'app-getallpatient',
  templateUrl: './getallpatient.component.html',
  styleUrl: './getallpatient.component.css'
})
export class GetallpatientComponent {
  patientList:Patient[] = [];
  constructor(private  patientService:PatientService,private router:Router){}
  getAll()
  {
   this.patientService.getAll().subscribe( 
     (list)=>{ this.patientList = list;  console.log(list)}
     
       );

}

deleteById(patientId:number)
 {
   this.patientService.deleteById(patientId).subscribe( (msg)=>{  console.log(`Deleted patient with ID ${patientId}`);});
   alert(`Prescription with ID ${patientId} deleted successfully`);
 }
 update()
 {
    this.router.navigate(['/updatepatient']);

 }
}
