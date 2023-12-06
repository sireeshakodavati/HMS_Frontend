import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '@app/model/Appointment';
import { AppointmentService } from '@app/services/appointment.service';

@Component({
  selector: 'app-getallappointment',
  templateUrl: './getallappointment.component.html',
  styleUrl: './getallappointment.component.css'
})
export class GetallappointmentComponent {
  appointmentList:Appointment[] = [];
  constructor(private  appointmentService:AppointmentService,private router:Router){}
  getAll()
  {
   this. appointmentService.getAll().subscribe( 
     (list)=>{ this.appointmentList= list;  console.log(list)}
     
       );

}
deleteById(appointmentId:number)
 {
   this.appointmentService.deleteById(appointmentId).subscribe( (msg)=>{  console.log(`Deleted Appointment with ID ${appointmentId}`);});
   alert(`Appointment with ID ${appointmentId} deleted successfully`);
 }
  appointmnetId(appointmentId: any) {
    throw new Error('Method not implemented.');
  }
 update()
 {
    this.router.navigate(['/updateappointment']);

 }
}
