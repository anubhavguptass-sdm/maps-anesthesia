import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSurgeonComponent } from 'src/app/modal/add-surgeon/add-surgeon.component';

@Component({
  selector: 'app-surgeon',
  templateUrl: './surgeon.component.html',
  styleUrls: ['./surgeon.component.scss']
})
export class SurgeonComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addSurgeon(): void {
    const dialogRef = this.dialog.open(AddSurgeonComponent, {
      panelClass: 'dialog-sm'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
