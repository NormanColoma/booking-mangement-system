import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from "./booking-list.component";

@NgModule({
    imports : [
        CommonModule
    ],
    declarations: [
        BookingListComponent
    ],
    exports: [
        BookingListComponent
    ]
})

export class BookingListModule {}