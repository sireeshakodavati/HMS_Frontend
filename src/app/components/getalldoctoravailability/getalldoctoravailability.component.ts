import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorAvailability } from '@app/model/DoctorAvailability';
import { DoctoravailabilityService } from '@app/services/doctoravailability.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-getalldoctoravailability',
  templateUrl: './getalldoctoravailability.component.html',
  styleUrl: './getalldoctoravailability.component.css'
})
export class GetalldoctoravailabilityComponent {
  doctoravailabilityList:DoctorAvailability[] = [];
  constructor(private  doctoravailabilityService:DoctoravailabilityService,private router:Router){}
  getAll()
  {
   this. doctoravailabilityService.getAll().subscribe( 
     (list)=>{ this.doctoravailabilityList= list;  console.log(list)}
     
       );

}
deleteById(doctorAvailabilityId:number)
 {
   this.doctoravailabilityService.deleteById(doctorAvailabilityId).subscribe( (msg)=>{  console.log(`Deleted DoctorAvailability with ID ${doctorAvailabilityId}`);});
   alert(`DoctorAvailability with ID ${doctorAvailabilityId} deleted successfully`);
 }
  doctorAvailabilityId(doctorAvailabilityId: any) {
    throw new Error('Method not implemented.');
  }
 update()
 {
    this.router.navigate(['/updatedoctoravailability']);

 }
}

