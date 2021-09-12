import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableHotelsComponent } from './BookingHotels/available-hotels/available-hotels.component';
import { ServiceBookingComponent } from './service-booking/service-booking.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HotelDetailComponent } from './BookingHotels/hotel-detail/hotel-detail.component';
import { UserLoginComponent } from './user-registration/user-login/user-login.component';
import { LandingPageComponent} from './landing-page/landing-page.component'

const routes: Routes = [
  { path: 'servicebooking', component: ServiceBookingComponent   },
  { path: 'userregistration/:userID', component:  UserRegistrationComponent },
  { path: 'hotelList', component:  AvailableHotelsComponent },
  { path: 'hotelList/:hotelID', component: HotelDetailComponent},
  { path: 'login', component: UserLoginComponent},
  { path: '', component: LandingPageComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }