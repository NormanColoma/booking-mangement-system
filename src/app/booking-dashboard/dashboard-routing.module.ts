import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingDashboardComponent } from './dashboard.component';

const dashboardRoutes : Routes = [
    {
        path: 'dashboard',
        component: BookingDashboardComponent
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