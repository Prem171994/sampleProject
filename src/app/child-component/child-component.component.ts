import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  EmployeeArray:any[]=[];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name:string="";
  address:string="";
  mobile:Number=0;
  currentEmployeeID = "";

  constructor(private http:HttpClient){
    this.getAllEmployee();
  }
  getAllEmployee(){
    this.http.get("http://localhost:4646/").subscribe((resultData:any)=>{
      this.isResultLoaded=true;
      console.log(resultData);
      this.EmployeeArray = resultData;
    });
  }

  register(){
    let bodyData = {
      "name":this.name,
      "address":this.address,
      "mobile":this.mobile
    };
    this.http.post("http://localhost:4646",bodyData).subscribe((resultData:any)=>{
      console.log(resultData);
      alert("Registered SuccessFully");
      this.getAllEmployee();
      this.name = "";
      this.address = "";
      this.mobile = 0;
    })
  }
  setUpdate(data:any){
   this.name = data.name;
   this.address = data.address;
   this.mobile = data.mobile;
   this.currentEmployeeID = data.id;
  }
  setDelete(data:any){

  }
  save(){
    if(this.currentEmployeeID == ""){
      this.register();
    }
    else{
      this.updateRecords();

    }
  }
  updateRecords(){
    let bodyData= {
      "name":this.name,
      "address":this.address,
      "mobile":this.mobile
    };
    
  }



}
