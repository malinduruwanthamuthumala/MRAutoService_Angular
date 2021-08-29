import { Component, Input, OnInit ,Output,EventEmitter } from '@angular/core';
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
  @Input() childData!: number;
  @Output() childDataChange = new EventEmitter();

  changeData = ()=>{
    this.childData = 100;
    this.childDataChange.emit(this.childData);
  }

}
