import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, Validators,FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {
  addEmployeeForm: any;
  constructor(private Employee:EmployeeService,private router:ActivatedRoute,private route:Router,private fb: FormBuilder) { this.addEmployeeForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phone_number:new FormControl(''),
    designation:new FormControl(''),
   


  }) }
  list:any;
  ngOnInit(): void {
    this.Employee.getcurrentdata(this.router.snapshot.params['id']).subscribe((res)=>{
      this.list=res;
      console.log(res)
      this.addEmployeeForm = new FormGroup({
        name:new FormControl(this.list.name),
        email:new FormControl(this.list.email),
        phone_number:new FormControl(this.list.phone_number),
        designation:new FormControl(this.list.designation),
       
      })
    })
  }
  employeeData() {
    this.Employee.getEmployee().subscribe((res: any) => {
      console.log(res);
    });
  }
  updateemployee(){
    alert('You want to make changes');
    this.Employee.updateEmployee(this.router.snapshot.params['id'],this.addEmployeeForm.value).subscribe(results=>{
      this.route.navigateByUrl('/employee-list')
       
    })
    this.employeeData();
  }
  cancel() {
    this.route.navigateByUrl("/employee-list")
  }

}
