import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-assign-employees',
  templateUrl: './assign-employees.component.html',
  styleUrls: ['./assign-employees.component.css']
})
export class AssignEmployeesComponent implements OnInit {

  assignEmployeeForm: any;
  constructor(private Employee: EmployeeService, private router: ActivatedRoute, private route: Router, private fb: FormBuilder) {
    this.assignEmployeeForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone_number: new FormControl(''),
      designation: new FormControl(''),

    })
  }
  list: any;
  ngOnInit(): void {
    this.Employee.getcurrentdata(this.router.snapshot.params['id']).subscribe((res) => {
      this.list = res;
      console.log(res)
      this.assignEmployeeForm = new FormGroup({
        name: new FormControl(this.list.name),
        email: new FormControl(this.list.email),
        phone_number: new FormControl(this.list.phone_number),
        designation: new FormControl(this.list.designation),
        devices: new FormControl(this.list?.devices?.id),
      })
    })
  }
  employeeData() {
    this.Employee.getEmployee().subscribe((res: any) => {
      console.log(res);
    });
  }
  updateemployee() {
    alert('You want to make changes');
    this.Employee.updateEmployee(this.router.snapshot.params['id'], this.assignEmployeeForm.value).subscribe(results => {
      this.route.navigateByUrl('/employee-list')

    })
    this.employeeData();
  }
  cancel() {
    this.route.navigateByUrl("/employee-list")
  }

}
