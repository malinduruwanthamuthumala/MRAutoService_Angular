import { Component, OnInit } from '@angular/core';
import {Hotel} from '../hotel.model';
import { HotelService } from '../../shared/hotel.service';

@Component({
  selector: 'app-available-hotels',
  templateUrl: './available-hotels.component.html',
  styleUrls: ['./available-hotels.component.css']
})
export class AvailableHotelsComponent implements OnInit {

  hotels:Hotel[] = [] ;
  parentData=10;
  value1:any=0;
  value2:any=0;
  total: any=this.value1+this.value2;
  birthday:string="23 january 2020";
  

  constructor(private hotelService:HotelService) { 
  
  }

  ngOnInit(): void {
    this.hotelService.getHotels()
      .subscribe((hotels:Hotel[])=>{
        this.hotels = hotels; 
    })
  }
   

  
   

  

}
