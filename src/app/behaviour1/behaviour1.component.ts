import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-behaviour1',
  templateUrl: './behaviour1.component.html',
  styleUrls: ['./behaviour1.component.css']
})
export class Behaviour1Component implements OnInit{
  constructor(private service:ServiceService){}
  ngOnInit(): void {
    
  }
  name = 'Angular';
  user!: string;

  newUser!: string;
  editedUser(user: any){
    this.service.editUser(this.newUser);
  }
}
