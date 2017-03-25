import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailsComponent } from './booking-details.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BookingDetailsComponent
    ],
    exports: [
        BookingDetailsComponent
    ]
})

export class BookingDetailsModule {}