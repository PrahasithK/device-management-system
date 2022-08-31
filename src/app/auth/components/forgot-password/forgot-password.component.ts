import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.router.navigate(['/auth/resetpassword']);
  }

  backToLogin() {
    this.router.navigate(['/auth/login']);
  }
}