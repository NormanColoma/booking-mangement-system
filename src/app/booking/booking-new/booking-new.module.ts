import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Booking } from "../../models/booking";
import { NewBookingComponent } from "./booking-new.component";
import { BookingFormModule } from "./booking-form/booking-form.module";

@NgModule({
    imports:[
        CommonModule,
        BookingFormModule
    ],
    declarations: [
        NewBookingComponent
    ],
    exports: [
        NewBookingComponent
    ]
})

export class NewBookingModule {}