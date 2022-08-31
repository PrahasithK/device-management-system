import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebarnav',
  templateUrl: './sidebarnav.component.html',
  styleUrls: ['./sidebarnav.component.css']
})
export class SidebarnavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  //logout
  LogoutUser(){
    localStorage.clear();
    this.route.navigateByUrl("auth/login")
  }
}
