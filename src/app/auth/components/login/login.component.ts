import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  data: any;
  unauthorizedUser: boolean = false;
  failureMsg: boolean = false;


  constructor(private route: Router, private http: HttpClient,
    private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }
  get f() {
    return this.loginForm.controls;
  }
  
  public inputType: string = 'password';
  showpassword(event: any) {
    if (event.target.checked) {
      this.inputType = 'text';
    }
    else {
      this.inputType = 'password';
    }
  }

  //login
  login(username: any, password: any) {

    this.loginForm.reset();    //reset login form 
    
    this.http.get(environment.base_url + '/auth/login/?email=' + username + '&' + 'password=' + password).subscribe((res: any) => {
      this.determineNavigation(res);              //login response
    }, (error) => {                              //Error callback
      console.error('invalid user')
      this.failureMsg = true;
    })
  }

  determineNavigation(empData: any) {     //determine navigation
    if (empData) {
      var empDataObj = empData;
      if (empDataObj.user_roles && empDataObj.user_roles.length > 0) {
        localStorage.setItem('loginData', JSON.stringify({ isLoggedIn: true, loginTime: Date.now(), ...empDataObj }))
        var userrRoles = empDataObj.user_roles;
        var isAdmin = false;
        for (var i = 0; i < userrRoles.length; i++) {
          if (userrRoles[i].roles) {
            if (userrRoles[i].roles.toLowerCase() == 'Admin'.toLowerCase()) {
              isAdmin = true;
              break;
            }

          }
        }
        if (isAdmin) {
          this.route.navigate(['/admin/adminhome'], { queryParams: { id: empDataObj.id } });

        } else {
          this.route.navigate(['/employee/employee-detail'], { queryParams: { id: empDataObj.id } });
        }
      } else {
        this.unauthorizedUser = true;
        console.log("No Roles Found");

      }
    }
    else {
      this.unauthorizedUser = true;
      console.log('No user found');
    }
  }
}