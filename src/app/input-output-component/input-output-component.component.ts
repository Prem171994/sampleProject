import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output-component',
  templateUrl: './input-output-component.component.html',
  styleUrls: ['./input-output-component.component.css']
})
export class InputOutputComponentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  sample:string ="Prem";
  outputValue :boolean =false;

  receiveValue(event:any){
    console.log(event);
    if(event == "prem"){
      this.outputValue = true;
    }
  }
}
