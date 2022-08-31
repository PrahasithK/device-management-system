import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private http: HttpClient) { }
  getDevices() {
    return this.http.get(environment.base_url + '/devices');

  }

  addDevices(elements: any) {
    return this.http.post(environment.base_url + '/devices', elements)
  }
  deletedevice(id: any) {

    return this.http.delete(environment.base_url + '/devices' + '/' + id)
  }


  updateDevice(id: any, data: any) {
    console.log("data", data);
    return this.http.put(environment.base_url + '/devices' + '/' + id, data)

  }
  updateDevices(id: any, data: any) {
    let url = environment.base_url + '/devices/' + id;
    return this.http.put(url, data)
  }
  
  getcurrentdevices(id: any) {
    return this.http.get(environment.base_url + '/devices' + '/' + id)
  }
  get(id: any) {
    return this.http.get(environment.base_url + '/employees' + '/' + id);
  }

  getEmployee() {
    return this.http.get(environment.base_url + '/employees');
  }
}
