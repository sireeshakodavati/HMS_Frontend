import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorregistrationComponent } from './components/doctorregistration/doctorregistration.component';
import { HomeComponent } from './components/home/home.component';
import { PatientloginComponent } from './components/patientlogin/patientlogin.component';
import { PatientregistrationComponent } from './components/patientregistration/patientregistration.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { DoctorloginComponent } from './components/doctorlogin/doctorlogin.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {ContactusComponent} from './components/contactus/contactus.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DoctordashboardComponent} from './components/doctordashboard/doctordashboard.component';
import { CrudprescriptionComponent } from './components/crudprescription/crudprescription.component';
import { AppointmentformComponent } from './components/appointmentform/appointmentform.component';
import { PatientdashboardComponent } from './components/patientdashboard/patientdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AdminregistrationComponent } from './components/adminregistration/adminregistration.component';
import { MedicaltestComponent } from './components/medicaltest/medicaltest.component';
import { DoctoravailabilityComponent } from './components/doctoravailability/doctoravailability.component';
import { GetallprescriptionComponent } from './components/getallprescription/getallprescription.component';
import { GetallmedicaltestComponent } from './components/getallmedicaltest/getallmedicaltest.component';
import { GetalldoctoravailabilityComponent } from './components/getalldoctoravailability/getalldoctoravailability.component';
import { UpdateprescriptionComponent } from './components/updateprescription/updateprescription.component';
import { UpdatemedicaltestComponent } from './components/updatemedicaltest/updatemedicaltest.component';
import { UpdateappointmentComponent } from './components/updateappointment/updateappointment.component';
import { UpdatedoctoravailabilityComponent } from './components/updatedoctoravailability/updatedoctoravailability.component';
import { GetallappointmentComponent } from './components/getallappointment/getallappointment.component';
import { GetallpatientComponent } from './components/getallpatient/getallpatient.component';
import { GetalldoctorComponent } from './components/getalldoctor/getalldoctor.component';
import { UpdatepatientComponent } from './components/updatepatient/updatepatient.component';
import { UpdatedoctorComponent } from './components/updatedoctor/updatedoctor.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorregistrationComponent,
    HomeComponent,
    PatientloginComponent,
    PatientregistrationComponent,
    AdminloginComponent,
    DoctorloginComponent,
    AboutusComponent,
    ContactusComponent,
    DoctordashboardComponent,
    DashboardComponent,
    CrudprescriptionComponent,
    AppointmentformComponent,
    PatientdashboardComponent,
    AdmindashboardComponent,
    AdminregistrationComponent,
    MedicaltestComponent,
    DoctoravailabilityComponent,
    GetallprescriptionComponent,
    GetallmedicaltestComponent,
    GetalldoctoravailabilityComponent,
    UpdateprescriptionComponent,
    UpdatemedicaltestComponent,
    UpdateappointmentComponent,
    UpdatedoctoravailabilityComponent,
    GetallappointmentComponent,
    GetallpatientComponent,
    GetalldoctorComponent,
    UpdatepatientComponent,
    UpdatedoctorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
