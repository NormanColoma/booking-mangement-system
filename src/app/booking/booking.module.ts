import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from "./booking.routing.module";
import { BookingListModule } from "./booking-list/booking-list.module";
import { BookingComponent } from "./booking.component";
import { NewBookingModule } from "./booking-new/booking-new.module";
import { BookingService } from './booking.service';
import { BookingDetailsModule } from './booking-details/booking-details.module';

@NgModule({
    imports: [
        CommonModule,
        BookingRoutingModule,
        BookingListModule,
        NewBookingModule,
        BookingDetailsModule
    ], 
    declarations: [
        BookingComponent
    ],
    exports: [
        BookingComponent
    ],
    providers: [
        BookingService
    ]
})

export class BookingModule{}