import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from "./booking-list/booking-list.component";
import { BookingComponent } from "./booking.component";
import { NewBookingComponent } from "./booking-new/booking-new.component";
import { BookingDetailsComponent } from "./booking-details/booking-details.component";

const bookingRoutes : Routes = [
    {
        path: 'bookings',
        component: BookingComponent,
        children: [
            {
                path: '',
                component: BookingListComponent,
                children: [
                    {
                        path: ':id',
                        component: BookingDetailsComponent   
                    }
                ]
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