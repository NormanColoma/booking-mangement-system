import { Component, Output, EventEmitter } from '@angular/core';
import { Booking } from "../../../models/booking";

@Component({
    selector: 'booking-form',
    templateUrl: './booking-form.component.html',
    styleUrls: []
})

export class BookingFormComponent{

    booking: Booking;

    constructor() {
    }

    @Output()
    submit: EventEmitter<Booking> = new EventEmitter<Booking>();

    handleSubmit(booking: Booking){
        this.submit.emit(booking);
    }
}