import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableServiceService {

  mydata: MyDataType[] = [
    {"id":1, "name":"Prem"},
    {"id":2, "name":"vallarasu"},
    {"id":3, "name":"Saravanan"},
    {"id":4, "name":"periyasami"}
  ];
  constructor() { }
  getUsersForSubscription():Observable<MyDataType[]>
  {
    let data = new Observable<MyDataType[]>(observer => {
          setTimeout(() => {
            observer.next(this.mydata);
          }, 2000);
    });
    return data;
  }
}
export interface MyDataType
{
  id: number;
  name: string;
}
