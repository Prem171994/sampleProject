import { Component, HostListener, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent {

  name: any;
  food: any;

  constructor(private dialogRef:MatDialogRef<PopupComponentComponent>,@Inject(MAT_DIALOG_DATA) private data: any){
    this.name = data.name;
  }
  @HostListener('document:keyup.escape') onClose() {
    this.onCancel();
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSubmit() {
    this.dialogRef.close(this.food);
  }
}
