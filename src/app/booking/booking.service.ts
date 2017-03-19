import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { BOOKINGS } from './bookings.mock';

@Injectable()
export class BookingService {
    getBookings() : Booking [] {
        return BOOKINGS;
    }
}