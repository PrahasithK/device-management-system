import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployee() {
    return this.http.get(environment.base_url + '/employees');
  }

  addEmployee(items: any) {
    return this.http.post(environment.base_url + '/employees', items);
  }
  deleteEmployee(id:any){
    return this.http.delete(environment.base_url+'/employees'+'/'+id);
  }
  getcurrentdata(id:any){
    return this.http.get(environment.base_url+'/employees'+'/'+id)
  }
  updateEmployee(id:any,data:any){
    return this.http.put(environment.base_url+'/employees'+'/'+id,data)
  }

}
