import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Hotel } from '../hotel.model';
import { HotelService } from '../../shared/hotel.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  public hotelID = "";
  hotels:Hotel[] = [];
  featuredHotel!: Hotel;

  constructor(
    private  route:ActivatedRoute,
    private hotelService:HotelService
    ) {

   }
  

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.hotelID = params['hotelID']
    });

    

    this.hotelService.getHotelById(this.hotelID).subscribe(
      (hotel:Hotel) =>{
        this.featuredHotel = hotel;
      }
    )


  }

}
