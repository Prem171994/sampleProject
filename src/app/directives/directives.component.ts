import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})

export class DirectivesComponent {
  @Output() outputEmit=new EventEmitter<any>();
  NgClassVariableValue:string =""
  ngClassVariable:boolean = false;

  styleValue: any;

  cbgDetails:Cbg[]=[
    {
      name:'Prem',role:'Developer',salary:10000
    },
    {
      name:'Saravanan',role:'Developer',salary:40000
    },
    {
      name:"Vallarasu",role:"TeamLeader",salary:80000
    }
   ]

   outputMethod(data:any){
    this.outputEmit.emit(data);
    this.styleValue = data.name;
  }
  ngClassMethod(value:boolean,data:any){
    this.NgClassVariableValue = data;
    this.ngClassVariable = value;
  }
  getColor(){
    let ngStyleColor = this.styleValue;
    return (ngStyleColor=='Prem')?'Green':((ngStyleColor=='Saravanan')?'Red':'Blue');
  }
 
    
}
export interface Cbg{
  name:string;
   role:string;
    salary:number;
   }
