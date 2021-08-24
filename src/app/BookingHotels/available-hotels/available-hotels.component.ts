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
  constructor(private hotelService:HotelService) { 

  }

  ngOnInit(): void {
    this.hotelService.getHotels()
      .subscribe((hotels:Hotel[])=>{
        this.hotels = hotels; 
    })
  }

  

}
