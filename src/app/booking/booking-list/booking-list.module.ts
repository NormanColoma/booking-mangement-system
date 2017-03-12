import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingListComponent } from "./booking-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports : [
        CommonModule,
        RouterModule
    ],
    declarations: [
        BookingListComponent
    ],
    exports: [
        BookingListComponent
    ]
})

export class BookingListModule {}