import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdditionalFeesComponent } from 'src/app/modal/additional-fees/additional-fees.component';
import { SelectAnesthesiologistComponent } from 'src/app/modal/select-anesthesiologist/select-anesthesiologist.component';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.scss']
})
export class ScheduleAppointmentComponent implements OnInit {

  constructor(    
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addtionalFees(): void {
    const dialogRef = this.dialog.open(AdditionalFeesComponent, {
      panelClass: 'dialog-sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  selectAnesthesiologist(): void {
    const dialogRef = this.dialog.open(SelectAnesthesiologistComponent, {
      panelClass: 'dialog-sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
