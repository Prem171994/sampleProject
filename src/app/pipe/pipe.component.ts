import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  term:string = "";
  topics = {
    "token": "eyefqffiwqnrfoqif",
    "users": [
      {
        "id": 1,
        "name": "Prem",
        "email": "prem@yahoo.com",
        "created_at": "2018-01-05 07:17:41",
        "updated_at": "2018-01-05 09:17:41",
        "outlet": {
        "id": 1,
        "name": "Sarawak Energy Berhad",
        "address": "Kuching City",
        "contact_number": "1300-88-3111",
        "created_at": "2018-01-05 10:17:44",
        "updated_at": "2018-01-05 10:17:44"
      },
        "roles": [
          {
            "id": 1,
            "name": "Admin",
            "created_at": "2018-01-05 10:17:40",
            "updated_at": "2018-01-05 10:17:40",
            "pivot": {
              "model_id": 1,
              "role_id": 1
            },
          }
        ]
      }
    ]
  };
  constructor(){}
  ngOnInit(){
    
  }
}
