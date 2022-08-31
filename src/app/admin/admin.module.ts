import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// routing module
import { AdminRoutingModule } from './admin-routing.module';
// components
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddDevicesComponent } from './components/add-devices/add-devices.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { SidebarnavComponent } from './components/sidebarnav/sidebarnav.component';
import { HelloComponent } from './components/hello.component';
import { SidebarDirective } from './components/sidenav.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditDevicesComponent } from './components/edit-devices/edit-devices.component';
import { EditEmployeesComponent } from './components/edit-employees/edit-employees.component';
import { AssignDevicesComponent } from './components/assign-devices/assign-devices.component';
import { AssignEmployeesComponent } from './components/assign-employees/assign-employees.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    AddDevicesComponent,
    DevicesListComponent,
    EmployeeListComponent,
    AdminhomeComponent,
    HelloComponent,
    SidebarDirective,
    SidebarnavComponent,
    EditDevicesComponent,
    EditEmployeesComponent,
    AssignDevicesComponent,
    AssignEmployeesComponent
  ],
  imports: [
    CommonModule,
    // routing module
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class AdminModule { }
