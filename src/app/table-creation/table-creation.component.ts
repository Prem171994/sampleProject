import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'PREM', weight: 60, symbol: 'D'},
  {position: 2, name: 'VALLARASU', weight: 105, symbol: 'TEAMLEADER'},
  {position: 3, name: 'SARAVANAN', weight: 75, symbol: 'FULL STACK DEVELOPER'},
  {position: 4, name: 'PERIYASAMI', weight: 0.250, symbol: 'ASST TEAMLEADER'},
  {position: 5, name: 'VIJAY', weight: 78, symbol: 'F'},
  {position: 6, name: 'AJITH', weight: 12.0107, symbol: 'F'},
  {position: 7, name: 'SURYA', weight: 14.0067, symbol: 'F'},
  {position: 8, name: 'DHANUSH', weight: 15.9994, symbol: 'F'},
  {position: 9, name: 'VIJAYSETHUBATHI', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'VIKRAM', weight: 20.1797, symbol: 'F'},
];

@Component({
  selector: 'app-table-creation',
  templateUrl: 'table-creation.component.html',
  styleUrls: ['table-creation.component.css'],
})
export class TableCreationComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
