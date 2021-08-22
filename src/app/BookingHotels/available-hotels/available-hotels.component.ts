import { Component, OnInit } from '@angular/core';
import {Hotel} from '../hotel.model';

@Component({
  selector: 'app-available-hotels',
  templateUrl: './available-hotels.component.html',
  styleUrls: ['./available-hotels.component.css']
})
export class AvailableHotelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hotels: Hotel[] =[

    {
      _id: '000001',
    title: 'blue beach',
    city: "Matara",
    street: "mahawela road",
    category: "hotel",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agoda.com%2Fblue-beach-villa%2Fhotel%2Fpanadura-lk.html&psig=AOvVaw2FVADYNHDRqA-o3L0dzN7I&ust=1629707846593000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiVgP2cxPICFQAAAAAdAAAAABAD",
    numOfRooms:12,
    description: "five starts",
    dailyPrice: 6500,
    shared: false,
    createdAt: "2020",
    },
    {
      _id: '000002',
      title: 'beautiful beach',
      city: "Matara",
      street: "nilwella",
      category: "villa",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hotels.com%2Fho539890%2Fblue-beach-wadduwa-sri-lanka%2F&psig=AOvVaw2FVADYNHDRqA-o3L0dzN7I&ust=1629707846593000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiVgP2cxPICFQAAAAAdAAAAABAO",      numOfRooms:4,
      description: "five starts",
      dailyPrice: 3500,
      shared: false,
      createdAt: "2020",
    }
  ]

}
