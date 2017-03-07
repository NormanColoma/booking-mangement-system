import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingDashboardComponent } from './dashboard.component';
import { BookingDashboardRoutingModule } from './dashboard-routing.module';
import { BookingFormModule } from './booking-form/booking-form.module';

@NgModule({
  imports: [
    CommonModule,
    BookingDashboardRoutingModule,
    BookingFormModule,
  ],
  declarations: [
    BookingDashboardComponent
  ],
  exports: [
    BookingDashboardComponent
  ]
})
export class BookingDashboardModule { }
