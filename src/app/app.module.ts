import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceBookingComponent } from './service-booking/service-booking.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AvailableHotelsComponent } from './BookingHotels/available-hotels/available-hotels.component';
import { RegisterHotelsComponent } from './BookingHotels/register-hotels/register-hotels.component';
import { HotelCardComponent } from './BookingHotels/UI/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceBookingComponent,
    UserRegistrationComponent,
    AvailableHotelsComponent,
    RegisterHotelsComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
