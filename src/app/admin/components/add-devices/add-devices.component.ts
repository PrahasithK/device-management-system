import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DevicesService } from '../../services/devices.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-devices',
  templateUrl: './add-devices.component.html',
  styleUrls: ['./add-devices.component.css']
})
export class AddDevicesComponent implements OnInit {
  addDevicesForm: any; // formgroup name
  employeeList: any;
  error:any;
  constructor(private fb: FormBuilder,
    private router: Router,
    private deviceService: DevicesService,
    private employeeService: EmployeeService) {
    this.addDevicesForm = this.fb.group({
      name: ['', Validators.required],
      employee_id: [''],
      device_type: ['', [Validators.required]],
      os: [''],
      service_tag: ['', Validators.required],

    })
  }

  ngOnInit(): void {

     }

  get f() {
    return this.addDevicesForm.controls;
  }
 submit() {
    if (!this.addDevicesForm.valid) {
      this.addDevicesForm.markAllAsTouched();
    } else {
      console.log("he", this.employeeList);
      this.deviceService.addDevices({
        name: this.addDevicesForm.value.name,
        // employee: this.addDevicesForm.value.employee,
        device_type: this.addDevicesForm.value.device_type,
        os: this.addDevicesForm.value.os,
        service_tag: this.addDevicesForm.value.service_tag,
        // devices: this.addDevicesForm.value.devices,
      })
        .subscribe(
          (response: any) => {
            console.log(response.employee);
            this.router.navigate(['/admin/devices-list']);
          });
    }
  }

  cancel() {
    this.router.navigate(['/admin/devices-list']);
  }


}
