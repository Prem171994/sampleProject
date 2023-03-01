import { Component } from '@angular/core';
import { MyDataType, ObservableServiceService } from './observable-service.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {

  subscriptionUsers: MyDataType[] = [];
  constructor(private observableservice:ObservableServiceService){
    this.getUsersWithSubscription();
  }
  
  getUsersWithSubscription() {
    this.observableservice.getUsersForSubscription().subscribe(res => {
      this.subscriptionUsers = res;
      console.log(
        "getUsersWithSubscription(): " + JSON.stringify(this.subscriptionUsers)
      );
    });
  }
}
