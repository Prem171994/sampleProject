import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sampleview-child',
  templateUrl: './sampleview-child.component.html',
  styleUrls: ['./sampleview-child.component.css']
})
export class SampleviewChildComponent {

  constructor(private elRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = 'red';
  }
  change(changedColor: String) {
    return this.elRef.nativeElement.style.color = changedColor;
  }
}
