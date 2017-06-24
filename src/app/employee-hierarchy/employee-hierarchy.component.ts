import { Component } from '@angular/core';
import { EmployeeHierarchyService } from './employee-hierarchy.service';
import { Employee } from './employee/employee.component';

@Component({
  selector: 'app-employee-hierarchy',
  templateUrl: './employee-hierarchy.component.html',
  styleUrls: ['./employee-hierarchy.component.scss']
  ,
  providers: [EmployeeHierarchyService]
})
export class EmployeeHierarchyComponent {

  result: Employee;
  payload;
  error;
  resultClass;
  processAttempted = false;

  constructor(private service: EmployeeHierarchyService) {
  }

  public process() {
    this.processAttempted = true;
    this.error = null;
    this.result = null;
    if (this.payload.length > 0) {
    }
    console.log('process');
    console.log(this.payload);
    this.service.processEmployeeHierarchy(this.payload).subscribe(
      (data: Employee) => {
        console.log(data)
        this.result = data;
        this.resultClass = 'panel-success';
      },
      err  => {
        console.log('err');
        console.log(err);
        this.error = err._body;
        this.resultClass = 'panel-danger';
      }
    );
  }
}
