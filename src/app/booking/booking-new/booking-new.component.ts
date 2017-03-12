import { Booking } from "../../models/booking";
import { Component } from "@angular/core";

@Component({
    selector: '',
    template: `
        <booking-form
            (submit)="onSubmitBooking($event)"
        >
        </booking-form>
    `,
    styleUrls: []
})

export class NewBookingComponent {
    onSubmitBooking(event : Booking){
        console.log(event);
    }
}