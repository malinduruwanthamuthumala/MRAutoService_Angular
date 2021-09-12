import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  User:any={
    username:"",
    password:""
  }
  constructor() { }

  ngOnInit(): void {
  }


  register(){
    alert(JSON.stringify(this.User))
  }

  get userDetails():String {
    return JSON.stringify(this.User);
  }

  

}
