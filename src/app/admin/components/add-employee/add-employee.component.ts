import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeRoutingModule } from 'src/app/employee/employee-routing.module';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  error: any;
  addEmployeeForm: any; // formgroup name
  roles = [{
    "id": 0,
    "role": "Admin"
  },
  {
    "id": 1,
    "role": "Employee"
  }]
  constructor(private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService) {

    this.addEmployeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      designation: ['', [Validators.required]],
      phone_number: ['', Validators.required],
      emp_id: [''],
      roles: ['', Validators.required],
      devices: ['']
    })
  }

  ngOnInit(): void {

  }

  get f() {
    return this.addEmployeeForm.controls;
  }

  submit() {
    if (!this.addEmployeeForm.valid) {
      this.addEmployeeForm.markAllAsTouched();
    } else {
      // this.loaderService.showLoader();
      this.employeeService
        .addEmployee({
          name: this.addEmployeeForm.value.name,
          email: this.addEmployeeForm.value.email,
          designation: this.addEmployeeForm.value.designation,
          phone_number: this.addEmployeeForm.value.phone_number,
          emp_id: this.addEmployeeForm.value.emp_id,
          roles: this.addEmployeeForm.value.roles,
          devices: this.addEmployeeForm.value.devices,
        })
        .subscribe((response: any) => {
          console.log(response);
          this.router.navigate(['/admin/employee-list']);
        },

        );
    }
  }


  cancel() {
    this.router.navigate(['/admin/employee-list']);
  }

}

