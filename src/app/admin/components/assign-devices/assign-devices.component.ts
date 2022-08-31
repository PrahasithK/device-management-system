import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-assign-devices',
  templateUrl: './assign-devices.component.html',
  styleUrls: ['./assign-devices.component.css']
})
export class AssignDevicesComponent implements OnInit {


  data: any;
  button: any;
  employeeData: any;
  employees: any;
  listForm: any;
  getUpdatedData: any;
  dataLists: any;
  devicesList: any;
  devicesEmployee: any;
  devicesData: any;
  editData: any;
  name: any;
  employee: any;
  id: any;
  update: any;
  resposone: any;
  devise: any;
  dataSuccss: any;
  listdata: any;
  obj1: any;
  origin = {}
  addForm: any;
  // devices.employee={}
  constructor(private devices: DevicesService,

    private http: HttpClient,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.getData();
    this.getEmployees();
    this.devices.get(this.activeRouter.snapshot.params['id']).subscribe((lists: any) => {
      this.employeeData = lists;
      console.log(this.employeeData);


    })
  }


  getEmployees() {
    this.devices.getEmployee().subscribe((data: any) => {
      this.devicesEmployee = data
    })
  }

  getData() {
    this.devices.getDevices().subscribe((res: any) => {
      // console.log(res);
      this.devicesList = res
    })
  }

  edit(devices: any) {

    devices.employee_id = this.employeeData.id
    console.log(devices);
    console.log(devices.employee);
    this.addForm = ({
      employee: (this.employeeData.employee)
    })
    this.devices.updateDevices(devices.id, devices).subscribe((rest: any) => {
      this.getUpdatedData = rest
      console.log(this.getUpdatedData);
      this.router.navigate(['/admin/employee-list'])
    })
  }




}
