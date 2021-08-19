import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceBookingComponent } from './service-booking/service-booking.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  { path: 'servicebooking', component: ServiceBookingComponent   },
  { path: 'userregistration', component:  UserRegistrationComponent }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }