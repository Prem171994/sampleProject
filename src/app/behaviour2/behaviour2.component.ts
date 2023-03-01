import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-behaviour2',
  templateUrl: './behaviour2.component.html',
  styleUrls: ['./behaviour2.component.css']
})
export class Behaviour2Component implements OnInit{
  name = 'Angular';
  user!: string;
  newUser!: string;
  constructor(private service:ServiceService){}
  ngOnInit(): void {
    this.service.castUser.subscribe(user => this.user = user);
  }
  newUsers(user: any){
    this.service.editUser(this.newUser);
  }

}
