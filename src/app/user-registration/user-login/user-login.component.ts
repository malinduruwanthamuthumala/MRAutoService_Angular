import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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


  register(form:NgForm){
    this.validate(form);
    if(form.invalid){
      return;
    }
    alert(JSON.stringify(this.User))
  }

  validate(form:NgForm){
    debugger
    Object.keys(form.controls).forEach(element => {
      form.controls[element].markAsDirty();
    });
  }

  get userDetails():String {
    return JSON.stringify(this.User);
  }

  

}
