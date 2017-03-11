import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDashboardComponent } from './dashboard.component';
import { BookingDashboardRoutingModule } from './dashboard-routing.module';
import { BookingFormModule } from './booking-form/booking-form.module';
import { BookingListModule } from "./booking-list/booking-list.module";

@NgModule({
  imports: [
    CommonModule,
    BookingDashboardRoutingModule,
    BookingFormModule,
    BookingListModule
  ],
  declarations: [
    BookingDashboardComponent
  ],
  exports: [
    BookingDashboardComponent
  ]
})
export class BookingDashboardModule { }
