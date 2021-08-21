import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

public userID = "";
  constructor(private  route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.userID = params['userID']
    })
  }

}
