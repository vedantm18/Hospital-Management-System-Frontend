import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DocdasComponent } from './docdas/docdas.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';

const routes: Routes = [

  // Home
  { path: 'home', component: HomeComponent },

  // Admin
  { path: 'admin', component: AdmindashComponent },

  // Admin Login
  { path: 'adlogin', component: AdloginComponent },

  // Doctor Login
  { path: 'doclogin', component: DocloginComponent },

  // Appointments
  { path: 'appointmentlist', component: AppointmentComponent },
  { path: 'create-appointment', component: CreateAppointmentComponent },

  // Patients
  { path: 'docdas', component: DocdasComponent },
  { path: 'create-patient', component: CreatePatientComponent },
  { path: 'view-patient/:id', component: ViewPatientComponent },

  // Medicines
  { path: 'view-medicine', component: MedicinelistComponent },
  { path: 'create-medicine', component: CreateMedicineComponent },
  { path: 'update-medicine/:id', component: UpdateMedicineComponent },

  // Default Route
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Invalid Route
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }