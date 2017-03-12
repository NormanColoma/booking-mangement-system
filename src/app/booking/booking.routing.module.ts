import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from "./booking-list/booking-list.component";
import { BookingComponent } from "./booking.component";
import { NewBookingComponent } from "./booking-new/booking-new.component";

const bookingRoutes : Routes = [
    {
        path: 'bookings',
        component: BookingComponent,
        children: [
            {
                path: '',
                component: BookingListComponent
            }, 
            {
                path: 'new',
                component: NewBookingComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(bookingRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BookingRoutingModule{}