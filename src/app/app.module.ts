import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ChangePasswordComponent } from './admin/change-password/change-password.component';
import { EditProfileComponent } from './admin/edit-profile/edit-profile.component';
import { AppointmentComponent } from './admin/appointment/appointment.component';
import { AppointmentDetailsComponent } from './admin/appointment-details/appointment-details.component';
import { ScheduleAppointmentComponent } from './admin/schedule-appointment/schedule-appointment.component';
import { AppointmentConfirmationComponent } from './modal/appointment-confirmation/appointment-confirmation.component';
import { PatientListComponent } from './admin/patient-list/patient-list.component';
import { AnesthesiologistComponent } from './admin/anesthesiologist/anesthesiologist.component';
import { AnesthesiologistDetailComponent } from './admin/anesthesiologist-detail/anesthesiologist-detail.component';
import { AnesthesiologistProfileComponent } from './admin/anesthesiologist-profile/anesthesiologist-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ProfileComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    AppointmentComponent,
    AppointmentDetailsComponent,
    ScheduleAppointmentComponent,
    AppointmentConfirmationComponent,
    PatientListComponent,
    AnesthesiologistComponent,
    AnesthesiologistDetailComponent,
    AnesthesiologistProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
