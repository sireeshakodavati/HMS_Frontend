import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';
import { PatientloginComponent } from './components/patientlogin/patientlogin.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DoctorregistrationComponent } from './components/doctorregistration/doctorregistration.component';
import { PatientregistrationComponent } from './components/patientregistration/patientregistration.component';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import{DashboardComponent} from './components/dashboard/dashboard.component'
import { CrudprescriptionComponent } from './components/crudprescription/crudprescription.component';
import { PatientdashboardComponent } from './components/patientdashboard/patientdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminregistrationComponent } from './components/adminregistration/adminregistration.component';
import { MedicaltestComponent } from './components/medicaltest/medicaltest.component';
import { DoctoravailabilityComponent } from './components/doctoravailability/doctoravailability.component';
import { GetallprescriptionComponent } from './components/getallprescription/getallprescription.component';
import { GetallmedicaltestComponent } from './components/getallmedicaltest/getallmedicaltest.component';
import { GetalldoctoravailabilityComponent } from './components/getalldoctoravailability/getalldoctoravailability.component';
import { AppointmentformComponent } from './components/appointmentform/appointmentform.component';
import { UpdateappointmentComponent } from './components/updateappointment/updateappointment.component';
import { UpdatedoctoravailabilityComponent } from './components/updatedoctoravailability/updatedoctoravailability.component';
import { UpdatemedicaltestComponent } from './components/updatemedicaltest/updatemedicaltest.component';
import { UpdateprescriptionComponent } from './components/updateprescription/updateprescription.component';
import { GetallappointmentComponent } from './components/getallappointment/getallappointment.component';
import { GetallpatientComponent } from './components/getallpatient/getallpatient.component';
import { GetalldoctorComponent } from './components/getalldoctor/getalldoctor.component';
import { UpdatepatientComponent } from './components/updatepatient/updatepatient.component';
import { UpdatedoctorComponent } from './components/updatedoctor/updatedoctor.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'home',component: HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'doctorlogin',component:DoctorloginComponent},
  {path:'patientlogin',component:PatientloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'doctorregistration',component:DoctorregistrationComponent},
  {path:'patientregistration',component:PatientregistrationComponent},
  {path:'doctordashboard',component:DoctordashboardComponent},
  {path:'crudprescription',component:CrudprescriptionComponent},
  {path:'patientdashboard',component:PatientdashboardComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'adminregistration',component:AdminregistrationComponent},
  {path:'medicaltest',component:MedicaltestComponent},
  {path:'dotoravailability',component:DoctoravailabilityComponent},
  {path:'getallprescription',component:GetallprescriptionComponent},
  {path:'getallmedicaltest',component:GetallmedicaltestComponent},
  {path:'getalldoctoravailability',component:GetalldoctoravailabilityComponent},
  {path:'appointment',component:AppointmentformComponent},
  {path:'updateappointment',component:UpdateappointmentComponent},
  {path:'updatedoctoravailability',component:UpdatedoctoravailabilityComponent},
  {path:'updatemedicaltest',component:UpdatemedicaltestComponent},
  {path:'updateprescription',component:UpdateprescriptionComponent},
  {path:'getallappointment',component:GetallappointmentComponent},
  {path:'getallpatient',component:GetallpatientComponent},
  {path:'getalldoctor',component:GetalldoctorComponent},
  {path:'updatepatient',component:UpdatepatientComponent},
  {path:'updatedoctor',component:UpdatedoctorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
