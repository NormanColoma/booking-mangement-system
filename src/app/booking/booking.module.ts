import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from "./booking.routing.module";
import { BookingListModule } from "./booking-list/booking-list.module";
import { BookingComponent } from "./booking.component";
import { NewBookingModule } from "./booking-new/booking-new.module";


@NgModule({
    imports: [
        CommonModule,
        BookingRoutingModule,
        BookingListModule,
        NewBookingModule
    ], 
    declarations: [
        BookingComponent
    ],
    exports: [
        BookingComponent
    ]
})

export class BookingModule{}