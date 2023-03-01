import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponentComponent } from './popup-component/popup-component.component';

@Component({
  selector: 'app-datapass',
  templateUrl: './datapass.component.html',
  styleUrls: ['./datapass.component.css']
})
export class DatapassComponent {

  name: any;
  food: any;
  constructor(private dialog:MatDialog){}
  openModal() {
    const dialogRef =  this.dialog.open(PopupComponentComponent,
       {data: {name: this.name},
      disableClose: true,width:'450px',height:'250px'});
      dialogRef.afterClosed().subscribe((submit) => {
        if (submit) {
          this.food = submit;
        } else {
          this.food = 'Nothing...';
        }
      })
    }
}
