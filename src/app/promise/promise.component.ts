import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
  text = "NO FOUND";

  login() {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        this.text = "STEP 0";
        resolve({ name: "sunil", id: 1234 })
      }, 2000)

    }).then(response => {
      this.text = "STEP 1";
      console.log("Step 1 completed ", response)
      return new Promise((resolve, reject) => {
        setTimeout( (_: any) => resolve(Object.assign({ title: "singh" }, response)), 2000)
      });

    }).then(response => {
      this.text = "STEP 2";
      console.log("Step 2 completed ", response);
      return "Simple text";

    }).then(response => {
      this.text = "STEP 3";
      console.log("Step 3 ", response);
      setTimeout(() => { console.log("Step 3 Delayed ") }, 2000);
      
    }).then(response => {
      this.text = "STEP 4";
      console.log("Step 4 ", response);
    })
  }
}
