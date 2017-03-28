import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { BOOKINGS } from './bookings.mock';

@Injectable()
export class BookingService {
    bookings: Booking [];
    constructor(){
        this.bookings = BOOKINGS;
    }
    getBookings() : Booking [] {
        return this.bookings;
    }

    getBookingById(id : Number) : Booking{
        return this.bookings.find(booking => booking.id === id);
    }
}