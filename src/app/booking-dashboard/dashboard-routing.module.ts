import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingDashboardComponent } from './dashboard.component';
import { BookingListComponent } from "./booking-list/booking-list.component";

const dashboardRoutes : Routes = [
    {
        path: 'dashboard',
        component: BookingDashboardComponent,
    },
    {
        path: 'bookings',
        component: BookingListComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BookingDashboardRoutingModule{}