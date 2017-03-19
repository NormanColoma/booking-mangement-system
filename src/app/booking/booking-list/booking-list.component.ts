import { Component, Input, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Booking } from "../../models/booking";

@Component({
    selector: 'booking-list', 
    templateUrl: './booking-list.component.html',
    styleUrls: []
})

export class BookingListComponent implements OnInit {
    bookings: Booking [];
    constructor(private bookingService: BookingService){

    }
    ngOnInit(): void {
        this.bookings = this.bookingService.getBookings();
        console.log(this.bookings);
    }
}