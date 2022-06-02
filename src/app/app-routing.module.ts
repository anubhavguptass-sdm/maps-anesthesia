import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnesthesiologistDetailComponent } from './admin/anesthesiologist-detail/anesthesiologist-detail.component';
import { AnesthesiologistProfileComponent } from './admin/anesthesiologist-profile/anesthesiologist-profile.component';
import { AnesthesiologistComponent } from './admin/anesthesiologist/anesthesiologist.component';
import { AppointmentDetailsComponent } from './admin/appointment-details/appointment-details.component';
import { AppointmentComponent } from './admin/appointment/appointment.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditProfileComponent } from './admin/edit-profile/edit-profile.component';
import { PatientListComponent } from './admin/patient-list/patient-list.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ScheduleAppointmentComponent } from './admin/schedule-appointment/schedule-appointment.component';
import { SurgeonComponent } from './admin/surgeon/surgeon.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'appointment',
    component: AppointmentComponent,
  },
  {
    path: 'appointment-details',
    component: AppointmentDetailsComponent,
  },
  {
    path: 'schedule-appointment',
    component: ScheduleAppointmentComponent,
  },
  {
    path: 'patient-list',
    component: PatientListComponent,
  },
  {
    path: 'anesthesiologist',
    component: AnesthesiologistComponent,
  },
  {
    path: 'anesthesiologist-detail',
    component: AnesthesiologistDetailComponent,
  },
  {
    path: 'anesthesiologist-profile',
    component: AnesthesiologistProfileComponent,
  },
  {
    path: 'surgeon',
    component: SurgeonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }