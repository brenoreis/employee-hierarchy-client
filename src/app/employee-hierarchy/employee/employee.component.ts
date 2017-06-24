import { Component, Input } from '@angular/core';

export interface Employee {
  'id': number,
  'name': string,
  'employees': Employee[]
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  @Input() employee: Employee

}
