import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPatientComponent } from 'src/app/modal/add-patient/add-patient.component';
import { PatientDetailsComponent } from 'src/app/modal/patient-details/patient-details.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  patientDetails(): void {
    const dialogRef = this.dialog.open(PatientDetailsComponent, {
      panelClass: 'dialog-sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addPatient(): void {
    const dialogRef = this.dialog.open(AddPatientComponent, {
      panelClass: 'dialog-sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
