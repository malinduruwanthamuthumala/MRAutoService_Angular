import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { AvailableHotelsComponent } from '../BookingHotels/available-hotels/available-hotels.component';
import { Hotel } from '../BookingHotels/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  hotels: Hotel[] =[

    {
      _id: '000001',
    title: 'blue beach',
    city: "Matara",
    street: "mahawela road",
    category: "hotel",
    image: "https://www.hotelj.lk/wp-content/uploads/2018/04/hotelj-brand-banner-desktop.jpg",
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
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/ea/54/hotel-presidente-4s.jpg?w=1200&h=-1&s=1",      numOfRooms:4,
      description: "five starts",
      dailyPrice: 3500,
      shared: false,
      createdAt: "2020",
    },
    {
      _id: '000003',
      title: 'ABC beach ',
      city: "Matara",
      street: "dickwella",
      category: "villa",
      image: "https://www.hotelj.lk/wp-content/uploads/2018/04/hotelj-brand-banner-desktop.jpg", 
      numOfRooms:4,
      description: "five starts",
      dailyPrice: 3500,
      shared: false,
      createdAt: "2020",
    }
  ]

  public getHotels():Observable<Hotel[]>{
    return new Observable((observer)=>{
      setTimeout(()=>{
        observer.next(this.hotels);
      },2000)
    });
    
    
  }
}
