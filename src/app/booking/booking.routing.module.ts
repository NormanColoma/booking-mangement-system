import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from "./booking-list/booking-list.component";
import { BookingComponent } from "./booking.component";
import { NewBookingComponent } from "./booking-new/booking-new.component";
import { BookingDetailsComponent } from "./booking-details/booking-details.component";

const bookingRoutes : Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: BookingListComponent,
            }, 
            {
                path: 'new',
                component: NewBookingComponent
            },
            {
                path: ':id',
                component: BookingDetailsComponent   
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