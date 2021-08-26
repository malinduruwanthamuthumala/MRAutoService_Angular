import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../hotel.model';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() hotel!: Hotel;

}
