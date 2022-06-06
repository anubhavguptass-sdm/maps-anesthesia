import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnectAnesthesiologistComponent } from 'src/app/modal/connect-anesthesiologist/connect-anesthesiologist.component';

@Component({
  selector: 'app-anesthesiologist',
  templateUrl: './anesthesiologist.component.html',
  styleUrls: ['./anesthesiologist.component.scss']
})
export class AnesthesiologistComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  connectAnesthesiologist(): void {
    const dialogRef = this.dialog.open(ConnectAnesthesiologistComponent, {
      panelClass: 'dialog-sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
