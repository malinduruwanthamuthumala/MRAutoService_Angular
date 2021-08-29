import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  public hotelID = "";
  constructor(private  route:ActivatedRoute) {

   }
  

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.hotelID = params['hotelID']
    })
  }

}
