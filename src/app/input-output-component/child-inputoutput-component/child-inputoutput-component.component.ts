import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-inputoutput-component',
  templateUrl: './child-inputoutput-component.component.html',
  styleUrls: ['./child-inputoutput-component.component.css']
})
export class ChildInputoutputComponentComponent {
@Input() demo:any;
@Output() output=new EventEmitter();


getValue(){
  this.output.emit("prem");
}

}
