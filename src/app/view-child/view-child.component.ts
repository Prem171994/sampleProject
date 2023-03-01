import { Component, ViewChild } from '@angular/core';
import { SampleviewChildComponent } from './sampleview-child/sampleview-child.component';


@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})

export class ViewChildComponent {
  @ViewChild(SampleviewChildComponent)
  private sampleview ={} as SampleviewChildComponent;
  colorchange (color:string){
    this.sampleview.change(color);
  }
}
