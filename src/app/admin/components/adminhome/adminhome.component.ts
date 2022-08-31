import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params) => {
        // console.log(params);
        if(params['id']){
          
          this.http.get(environment.base_url + '/employees/'+params['id']).subscribe((res: any) => {
            this.data = res;
          })
        }else{
          console.log("user details not found");
        }      
      });
  }

}